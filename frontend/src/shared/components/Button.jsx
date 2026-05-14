import cn from '../utils/cn'
import { LoaderCircle } from 'lucide-react'

const Button = ({ text = '', icon: Icon, onClick, disabled, loading = false, type = '', className = '' }) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={cn('cursor-pointer px-3.5 py-2 rounded-2xl bg-primary w-fit text-text',
                (!disabled && !loading) && '',
                disabled && 'cursor-not-allowed transition-none',
                loading && 'cursor-progress transition-none',
                type == 'pill' && 'rounded-full',
                type == 'outline' && 'bg-transparent text-primary border-2 border-primary/50',
                type == 'pill_outline' && 'rounded-full bg-transparent text-secondary border-2 border-primary/50',
                className)}
        >
            {Icon &&
                <Icon size={16} />
            }
            {text &&
                <h5 className=''>{text}</h5>
            }
            {loading &&
                <LoaderCircle size={16} className='animate-spin' />
            }
        </button>
    )
}

export default Button