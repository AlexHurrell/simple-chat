import moment from "moment";

export default function timestampConverter(timestamp) {
  var time = moment(timestamp).format("DD-MM-YYYY HH:mm");
  return time;
}
