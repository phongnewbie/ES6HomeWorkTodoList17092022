class Activity {
  constructor(activityName, activityWord) {
    this.activityName = activityName;
    this.activityWord = activityWord;
  }
}
let activityTask = [];
let tasksDone = [];

document.getElementById("addItem").onclick = () => {
  activityTask = getData();
  let activityName = document.getElementById("newTask").value;

  console.log(activityName);

  let activityWord = Math.random();
  let activity = new Activity(activityName, activityWord);
  if (activityTask) {
    activityTask = [...activityTask, activity];
  } else {
    activityTask = [activity];
  }
  saveData(activityTask);
  displayData(activityTask);
};
let displayData = (workList) => {
  let result = "";
  if (workList) {
    workList.map((item) => {
      result += `
                    <li>
                        <div class=""col-7>
                            ${item.activityName}              
                        </div>
                        <span>
                            <button class ="col-9 bg-success text-danger" onclick="deleteActivity(${item.activityWord})">
                                xóa

                            </button>
                            <button class=""col-7  bg-info text-success onclick"checkingActivitiy(${item.activityWord})">Kiểm tra</button>
                        </span>
                    </li>
            
            `;
    });
  }
  document.getElementById("todo").innerHTML = result;
};
//hiển thi
let getData = () => {
  return JSON.parse(localStorage.getItem("taskList"));
};

let saveData = (data) => {
  localStorage.setItem("taskList", JSON.stringify(data));
};
let checkingExistData =(workList)=>{
    let result ="";
    if(workList == true){
        workList.map
    }
}
const deleteActivity =(activity)=>{
    tasksDone = getData();
    let taskWorking = tasksDone.findIndex(item=> item.activity == activity)
    tasksDone.splice(taskWorking,1);
    saveData(taskWorking);
    getData(taskWorking)
}
const deleteActivityAll = (activity) => {
    // lấy dữ liệu từ localStorage
    listTask = loadData();

    //C1 xóa bằng splice
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    //listFood.splice(foodIndex, 1);

    //C2 filter ngược
    let activityList = listTask.filter(item => item.activity != activity);

   

    // gọi hàm lưu data lên localstorage
    saveData(activityList);

    //gọi data từ localstorage
    showData(activityList);
}

