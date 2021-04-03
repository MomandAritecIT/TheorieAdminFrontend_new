import store from '@/store'
import axios from 'axios'
import VueCookies from 'vue-cookies'

store.subscribe((mutations) => {
    switch(mutations.type) {
        case 'SET_TOKEN':
            if (mutations.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutations.payload}`
                VueCookies.set('token', mutations.payload) 
            } else {
                axios.defaults.headers.common['Authorization'] = null
                VueCookies.remove('token')
            }
        break;
    }
})