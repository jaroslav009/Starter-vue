<template>
    <div>
        <ul>
            <li v-for="item in posts" :key="item.title">
                <h1>{{item.title}}</h1>
                <h2 v-if="item.subTitle != ''">{{item.subTitle}}</h2>
                <p>{{item.body}}</p>

            </li>
        </ul>
        <button @click="toCreate">Go to the create post</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['posts']),
    },
    methods: {
        toCreate() {
            this.$router.push('/');
        }
    }
}
</script>