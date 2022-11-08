//市場調查資料
let data = [
  {
    name: "艾草充電站",
    charge: '免費'
  },
  {
    name: "Vivian充電站",
    charge: '投幣式'
  },
  {
    name: "筑子充電站",
    charge: '免費'
  },
  {
    name: "魚魚充電站",
    charge: '免費'
  },
  {
    name: "鵬聖充電站",
    charge: '投幣式'
  }
];
const list = document.querySelector('.list')

let str = '';
data.forEach(function(item,index){
  str +=(`<li>${item.name}，${item.charge}</li>`);

})
list.innerHTML = str;

const filter = document.querySelector('.filter');

filter.addEventListener('click',function(e){
  if(e.target.value == undefined){
  return;//因為input是在div內 所以如果點擊到div旁邊的空白處不會有資料 也就是說這個return是中斷if用的
  }
  let str = '';
  data.forEach(function(item,index){
    if(e.target.value == item.charge){//篩選按鈕 如果點到免費 就顯示免費的資訊
      str += `<li>${item.name}，${item.charge}</li>`
    }
    else if(e.target.value == '清除'){//顯示全部資料
      str += `<li>${item.name}，${item.charge}</li>`
    }
  })
  list.innerHTML = str
})

