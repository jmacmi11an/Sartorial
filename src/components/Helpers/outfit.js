import _ from 'underscore';

export const createOutfit = (filtered) => {
  if (filtered.length < 1){
    return
  }
  const grouped = _.groupBy(filtered, c => c.data.type)
  let outfit = [];
  outfit.push(_.sample(grouped.jacket))
  outfit.push(_.sample(grouped.top));
  outfit.push(_.sample(grouped.bottoms));
  outfit.push(_.sample(grouped.shoes));
  return outfit
}
