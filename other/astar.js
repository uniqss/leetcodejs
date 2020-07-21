function Pos(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}
// [fromx, tox)   [fromy, toy)
function posvalid(fromx, fromy, tox, toy, x, y) {
    return fromx <= x && x < tox && fromy <= y && y < toy;
}
function astar_search(map, countx, county, posfrom, posto) {
    openlist = [];
    closelist = [];
    if (!posvalid(0, 0, countx, county, posfrom.x, posfrom.y)) return [];
    if (!posvalid(0, 0, countx, county, posto.x, posto.y)) return [];

    posfrom.f = 0;
    posfrom.g = 0;
    posfrom.h = 0;
    openlist.push(posfrom);
    while(openlist.length > 0){
        curr = openlist.pop();
        curr.
    }
}

