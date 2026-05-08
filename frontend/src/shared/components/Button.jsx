import React from 'react'
import cn from '../utils/cn'
import { LoaderCircle } from 'lucide-react'

const Button = ({ text, icon: Icon, onClick, disabled, loading = false, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={cn('cursor-pointer px-3.5 py-2 rounded-2xl bg-primary',
                (!disabled && !loading) && '',
                disabled && 'cursor-not-allowed transition-none',
                loading && 'cursor-progress transition-none',
                className)}
        >
            {Icon &&
                <Icon size={16} />
            }
            {text &&
                <h5 className='text-sm text-text-onlight'>{text}</h5>
            }
            {loading &&
                <LoaderCircle size={16} className='animate-spin' />
            }
        </button>
    )
}

export default Button