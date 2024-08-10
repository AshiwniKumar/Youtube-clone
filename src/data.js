export const API_KEY = "AIzaSyA2ybJ3ylKD9Qr9maJ9tfx55yLV5lqPumU"


export const value_converter = (value)=>{
    if(value>1000000){
        return Math.floor(value/1000000)+"M"
    }
    if(value>1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}