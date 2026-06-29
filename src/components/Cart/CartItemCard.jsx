import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Trash2 } from 'lucide-react';
import {useCart} from '../../store/CartStore'



const CartItemCard = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const handleQuantityChange = (newQuantity) => {
        updateQuantity(item.id, newQuantity);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item.id);
        toast.error('Item removed from cart');
    };
    //const { cartItems, totalPrice } = useCart();

    return (

        <div className='mx-2 my-1 relative flex items-center justify-between gap-4 w-full border border-gray-200'>

            <div className='flex items-center gap-4 p-2 border-b border-gray-200'>
                <img src={item.thumbnail} alt={item.title} className='w-20 h-20 object-cover rounded-md' />
                <div className="flex flex-col gap-3 p-3">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                            {item.title}
                        </h3>
                        <h5 className="text-sm text-gray-500">
                            {item.brand}
                        </h5>

                    </div>

                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 w-fit">
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                        >
                            -
                        </Button>

                        <span className="font-semibold text-base min-w-[24px] text-center">
                            {item.quantity}
                        </span>

                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                        >
                            +
                        </Button>
                    </div>
                </div>

            </div>
            <Button
                size="icon"
                variant="ghost"
                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full absolute top-2 right-2"
                onClick={handleRemoveFromCart}
            >
                <Trash2 className="w-5 h-5" />
            </Button>
            <div className='px-2'>
                <p className="text-green-600 font-medium">
                    ${item.price.toFixed(0)}
                </p>

            </div>



        </div >

    )
}

export default CartItemCard
