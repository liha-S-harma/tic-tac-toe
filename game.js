let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg_Container = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let turn_O = 1;
const win_Patterns = [
    [0,1,2] , [0,3,6] , [0,4,8],
    [1,4,7],
    [2,5,8], [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener("click", () =>
    {
        console.log("Button clicked");
        if (turn_O === 1)
        {
            box.innerText = "X";
            turn_O = 0;
        }
        else
        {
            box.innerText = "O";
            turn_O = 1;
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner = (winner) =>
{
    msg.innerText = "CONGRATS, WIENER is "+winner;
    msg-con.classList.remove("hide");
}
const checkWinner = () =>
{
    for(let ptrn of win_Patterns)
    {
        let pos1 =boxes[ptrn[0]].innerText;
        let pos2 =boxes[ptrn[1]].innerText;
        let pos3 =boxes[ptrn[2]].innerText;
        if (pos1 != ""&& pos2 !="" && pos3 != "")
        {
            if (pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }

    }
};
