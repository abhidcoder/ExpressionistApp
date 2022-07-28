import {HiEmojiHappy,HiEmojiSad,HiOutlineEmojiHappy,HiOutlineEmojiSad} from 'react-icons/hi';
const initialState="Click on the buttons to see the Expression";

const changeTheMood =(state= initialState,action)=>{

    switch(action.type)
    {
        case "SMILE" : return( <div><h1 style={{fontSize:"10.5rem"}}><HiEmojiHappy/></h1></div>);

        case "STOPSMILE" : return( <div><h1 style={{fontSize:"10.5rem"}}><HiEmojiSad/></h1></div>);

        case "CHANGE" :  return( <div><h1 style={{fontSize:"10.5rem",color:"purple"}}><HiOutlineEmojiHappy/></h1></div>);

        case "AGAINCHANGE" : return( <div><h1 style={{fontSize:"10.5rem",color:"red"}}><HiOutlineEmojiSad/></h1></div>);

        default : return (<div><br></br><br></br><h5>{state}</h5></div>);


    }

}

export default changeTheMood;