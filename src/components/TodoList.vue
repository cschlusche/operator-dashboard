<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TodoList',
    data() {
        return {
            mode: 0, // 0: create, 1: edit
            tasks: [{ id:0, isDone:false, title:'Clean bath' },
                    { id:1, isDone:true, title:'Buy groceries' }],
            
            v_current_idx: 0,
            v_current_title: '',
        }
    },

    methods: {
        /*
         * `Event.currentTarget` needs to be casted to HTMLInputElement in order to call `value`
         */
        processTask(event: Event){

            if(this.mode == 0){
                
                this.submitNewTask(event)
            }else if(this.mode == 1){

                this.editExistingTask(event)
            }

            this.v_current_idx = 0
            this.v_current_title = ''
        }, 
         submitNewTask(event: Event) {
            
            let target = <HTMLInputElement>event.currentTarget // https://stackoverflow.com/a/63631426/11941004

            if(target != null){
              let title: string = target.value
              let task = {id: this.tasks.length, isDone:false, title: title}

              this.tasks.push(task)
            }
        },
        editExistingTask(event: Event){


            let target = event.currentTarget
            
            if(target != null){
                let new_title: string = this.v_current_title

                this.tasks[this.v_current_idx].title = new_title

            }
            
            // back to creation mode
            this.mode = 0
        },

        TaskClicked(index: number) {

            if(index < this.tasks.length){
                
                this.mode = 1 // edit mode
                this.v_current_idx = index
                this.v_current_title = this.tasks[index].title
            }
        }
    },
    mounted() {
        this.tasks
    }
})
</script>

<template>
    <h2>TodoList</h2>
    <ol>
        <li v-for="(task, i) in tasks">
            <input type="checkbox" name="{{'chk_isDone' + i}}" v-model="task.isDone" />
            <label for="{{'chk_isDone' + i}}" @click="TaskClicked(i)">{{ task.title }}</label></li>
    </ol>
    <input type="text" v-model="v_current_title" @keyup.enter="processTask"/>
</template>