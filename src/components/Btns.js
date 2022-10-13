import { useState } from "react";

function Btns(props) {

    let [index, setIndex] = useState(0);
    // function minus(e){
    //     setIndex(--index); // 처음에는 0이었던 값을 -1 -2 -3 이런식으로 주기 위함
    //     props.frame.current.style.transform = `rotate(${index * props.deg}deg)` //props.deg가 45deg인데 index는 0부터 -1 -2 -3 -4 이런식으로 올라가기 때문에 점점 값이 낮아진다. (반대로 회전됨)
    // }

    // function plus(e){
    //     setIndex(++index); //전위 연산자를 이용해야한다. 후위연산자는 버튼을 두번 클릭해야 넘어가는 현상이 발생 후위연산자는 변수 초기값을 먼저 활용하고 그 뒤에 연산된 값을 이용하기 때문이다.
    //     props.frame.currnet.style.transform = `rotate(${index * props.deg}deg)`
    // } 
    //리액트 자체가 가상 DOM이기 때문에 closest나 queryselector는 사용하지 못한다. 리얼 돔에서만 사용가능.
    function move(num){
        setIndex(num);
        props.frame.current.style.transform = `rotate(${num * props.deg}deg)`
    }


    return(
        <>
            <div className="btnPrev" onClick={() => move(--index)}>
                <span>PREV</span>
            </div>

            <div className="btnNext" onClick={() => move(++index)}>
                <span>NEXT</span>
            </div>
        </>
    )  
}

export default Btns;