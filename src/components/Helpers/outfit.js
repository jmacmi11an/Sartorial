import zero from './wardrobes/zero';
import _ from 'underscore';

export const createOutfit = (filtered) => {
  const grouped = _.groupBy(filtered, c => c.data.type)
  let outfit = [];
  outfit.push(_.sample(grouped.jacket))
  outfit.push(_.sample(grouped.shoes));
  outfit.push(_.sample(grouped.bottoms));
  outfit.push(_.sample(grouped.top));
  console.log(outfit)
  return outfit
    // let tops = [];
    // let bottoms = [];
    // let shoes = [];
    // let jacket = [];
    // let outfit = [];
    // //one line in underscore groupby
    // for (let i = 0; i < filtered.length; i++){
    //   let current = filtered[i]
    //   if (current.data.type === "top"){
    //     tops.push(current.name)
    //   }
    //   if (current.data.type === "bottoms"){
    //     bottoms.push(current.name)
    //   }
    //   if (current.data.type === "shoes"){
    //     shoes.push(current.name)
    //   }
    //   if (current.data.type === "jacket"){
    //     jacket.push(current.name)
    //   }
    // }
    // outfit.push(_.sample(tops))
    // outfit.push(_.sample(bottoms))
    // outfit.push(_.sample(shoes))
    // outfit.push(_.sample(jacket))
    //
    // return outfit;
}
