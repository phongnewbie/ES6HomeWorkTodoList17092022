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
};
let displayData = (workList) => {
  let result = "";
  if (workList) {
    workList.map((item) => {
      result += `
                <ul>
                    <li>
                        <div class=""col-7>
                            ${item.activityWord}              
                        </div>
                        <span>
                            <button class ="col-3 bg-success text-danger" onclick="deleteActivity()">
                                xóa

                            </button>
                            <button class=""col-3 bg-info text-success onclick"checkingActivitiy()">Kiểm tra</button>
                        </span>
                    </li>
                </ul>
            
            `;
    });
  }
};
//hiển thi
let getData = () => {
  return JSON.parse(localStorage.getItem("taskList"));
};

let saveData = (data) => {
  localStorage.setItem("taskList", JSON.stringify(data));
};
const deleteActivity =(activity)=>{
    tasksDone = getData();
    let taskWorking = tasksDone.findIndex(item=> item.activity == activity)
    tasksDone.splice(taskWorking,1);
    saveData(taskWorking);
    getData(taskWorking)
}
const deleteActivity = (activity) => {
    // lấy dữ liệu từ localStorage
    listTask = loadData();

    //C1 xóa bằng splice
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    //listFood.splice(foodIndex, 1);

    //C2 filter ngược
    let arrayTask = listTask.filter(item => item.taskCode != taskCode);

   

    // gọi hàm lưu data lên localstorage
    saveData(arrayTask);

    //gọi data từ localstorage
    showData(arrayTask);
}

