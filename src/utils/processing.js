export const processing = (data) => {
  const keys = Object.keys(data);
  const labels = [];
  const values = [];
  let label = "";
  keys.forEach((key) => {
    const date = key.split("/");
    label = date[0];
    labels.push(date[1]);
    values.push(data[key]);
  });
  return {
    labels,
    datasets: [{ id: 1, label, data: values, backgroundColor: "#eb3a34" }],
  };
};
