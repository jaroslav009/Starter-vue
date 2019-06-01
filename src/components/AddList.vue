<template>
    <div>
        <div class="form-input">
            <input placeholder="title" v-model="title" />
        </div>
        <div class="form-input">
            <input placeholder="sub-ttile" v-model="subTitle" />
        </div>
        <div class="form-input">
            <textarea placeholder="body" v-model="body" />
        </div>
        <button @click="createPostFunc">Create post</button>
        <button @click="listGo">Go to the list</button>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    
    data() {
        return {
            title: '',
            subTitle: '',
            body: '',
        }
    },
    computed: {
        ...mapState(['posts']),
    },
    methods: {
        ...mapActions(['createPost']),
        createPostFunc() {
            if(this.title == '' || this.body == '') {
                return;
            }
            let data = {
                title: this.title,
                subTitle: this.subTitle,
                body: this.body
            }
            console.log('click')
            this.createPost(data);
        },
        listGo() {
            this.$router.push('/list')
        }
    }
    
}
</script>

<style>
    .form-input {
        padding-bottom: 10px;
    }
    .form-input input, .form-input textarea {
        width: 14%;
        padding-left: 10px;
    }
</style>