Array.prototype.flatMap = function(fn, ctx) {
  return this.reduce((k, v) => k.concat(fn.call(ctx, v)), []);
};
export function find (host, visited = new Set()) {
  visited.add(host);
  return host
    ? Object
        .keys(host)
        .flatMap(key => typeof host[key] === 'function'
          ? (...args) => host[key](...args)
          : visited.has(host[key])
            ? []
            : find(host[key], visited)
        )
    : [];
}
export function findAll (host, visited = new Set()) {
  return find(host, visited).flatMap(fn => {
    try {
      return find(fn(), visited).concat(fn);
    } catch (e) {
      return find(e, visited).concat(fn);
    }
  });
}
export default function pandora(box = findAll(global)) {
  return (...args) => box[Math.floor(Math.random() * box.length)].call(this, ...args);
};
