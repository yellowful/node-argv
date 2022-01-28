
const generation = process.argv[2]
// console.log('process.arg:',process.argv);

if (generation==='一代'){
  console.log(`唉，Apple TV 4K ${generation}的遙控器真得很難用`)
} else if (generation==='二代'){
  console.log(`幸運喔，Apple TV 4K ${generation}的遙控器好用多了`)
} else {
  console.log(`只有一代和二代可以當成參數輸入啦，請再試一次`)
}