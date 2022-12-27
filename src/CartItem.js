import React from "react";
// cart item will inherit some features from React.Component class 
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone', 
            qty : 1,
            img : ''
        }
    }
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{this.state.title}</div>
                    <div style={{color : '#777'}}>Rs {this.state.price}</div>
                    <div style={{color : '#777'}}>Qty: {this.state.qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/748/748113.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />

                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image : {
        height : 110,
        width : 110, 
        borderRadius : 4, 
        background : '#ccc'
    }
}
export default CartItem; 