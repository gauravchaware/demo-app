export const getInitials = (name) =>
  name
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();

export const truncate = (input, length) => (input.length > length ? `${input.substring(0, length)}...` : input);

export const sortByDate = (data) => {
  return data.sort(function (a, b) {
    var c = new Date(a.time);
    var d = new Date(b.time);
    return c - d;
  });
};

const calculateConversionPerDay = (data) => {
  let newData = {};
  data.forEach((element) => {
    if (element.type === "conversion") {
      newData[element.time] = (newData[element.time] || 0) + 1;
    }
  });
  return newData;
};

export const combineUsersLog = (data, LogsData) => {
  return data.map((user) => {
    let logs = LogsData.filter((log) => log.user_id === user?.fields?.Id).map((log) => {
      return {
        ...log,
        time: log.time.split(" ")[0],
      };
    });

    logs = sortByDate(logs);
    const conversions = logs.filter((log) => log?.type === "conversion");
    const impressions = logs.filter((log) => log?.type === "impression");
    const revenueTotal = `$${logs.reduce((partialSum, log) => partialSum + parseFloat(log?.revenue), 0).toFixed(2)}`;
    const conversionPerDay = calculateConversionPerDay(logs);
    return {
      ...user,
      conversions: conversions?.length,
      impressions: impressions?.length,
      revenue: revenueTotal,
      logs,
      conversionPerDay,
    };
  });
};
