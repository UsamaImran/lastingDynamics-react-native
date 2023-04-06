import { MAGENTA } from '../constants/colors'
import Billing from '../Screen/Billing/Billing'
import Dashboard from '../Screen/dashboard/Dashboard'
import Pago from '../Screen/Pago/Pago'
import SignUp from '../Screen/signUp/SignUp'
import Extract from '../svgs/Extract'
import Home from '../svgs/Home'
import PagoIcon from '../svgs/PagoIcon'
import Person from '../svgs/Person'
import BottomTabs from './BottomTabs'

export const STACK_SCREENS = [
    {
        name: 'SignUp',
        options: { headerShown: false },
        component: SignUp,
    },
    {
        name: 'BottomTabScreen',
        options: { headerShown: false },
        component: BottomTabs,
    },
    {
        name: 'Payment details',
        component: Billing,
        options: {
            headerStyle: {
                backgroundColor: MAGENTA,
                height: 100,
                color: 'white',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
            },
        },
    },
]

export const TAB_SCREENS = [
    {
        name: 'Dashboard',
        options: { headerShown: false },
        component: Dashboard,
        icon: Home,
    },
    {
        name: 'Extract',
        options: { headerShown: false },
        component: Dashboard,
        icon: Extract,
    },
    {
        name: 'Pago',
        options: { headerShown: false },
        component: Pago,
        icon: PagoIcon,
    },
    {
        name: 'Profile',
        options: { headerShown: false },
        component: Dashboard,
        icon: Person,
    },
]
