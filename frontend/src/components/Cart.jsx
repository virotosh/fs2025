import { connect } from 'react-redux';
import { clearCart } from "./cart/actions";
import { useDispatch } from 'react-redux';

function Cart ({cart}) {
    const dispatch = useDispatch();
   const deleteCart = async (e) => {
    dispatch(clearCart());
     }
   return (
       <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      
       {cart.items.length>0 ? (
           cart.items.map((it) =>(
               <div >
                   <a className="text-indigo-400 text-lg font-semibold">{it.cartitem.title}</a>
                   <a> - quantity: {it.quantity}</a>
               </div>
           ))) : ("Empty Cart!")
       }
       {cart.items.length>0 ? (<button
                   type="submit"
                   className="px-6 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                   onClick={(e) => deleteCart()}
               >
                   Clear Cart
           </button>) : ("")
       }
       </div>
   );
}

const mapStateToProps = state => ({
   cart: state.cart
});

export default connect(
   mapStateToProps,
   null
)(Cart);
