export default function minus() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var init = args.shift() || 0;
  return args.reduce(function (prev, cur) {
    return prev - cur;
  }, init);
}