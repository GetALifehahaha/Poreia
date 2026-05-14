import cn from '../utils/cn'
import { LoaderCircle } from 'lucide-react'

const Button = ({ text = '', icon: Icon, iconPosition='left', onClick, disabled, loading = false, type = '', className = '' }) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={cn('cursor-pointer px-6.5 py-2 rounded-2xl bg-secondary w-fit text-foreground flex items-center gap-2',
                (!disabled && !loading) && '',
                disabled && 'cursor-not-allowed transition-none',
                loading && 'cursor-progress transition-none',
                type == 'pill' && 'rounded-full',
                type == 'outline' && 'bg-transparent text-primary border-2 border-primary/50',
                type == 'pill_outline' && 'rounded-full bg-transparent text-secondary border-2 border-primary/50',
                (Icon && iconPosition == 'left') &&'pl-4.5',
                (Icon && iconPosition == 'right') && 'flex-row-reverse pr-4.5',
                className)}
        >
            {Icon &&
                <Icon size={20} />
            }
            {text &&
                <h5 className='text-sm'>{text}</h5>
            }
            {loading &&
                <LoaderCircle size={20} className='animate-spin' />
            }
        </button>
    )
}

export default Button