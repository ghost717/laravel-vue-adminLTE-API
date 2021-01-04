<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Tasks</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div><!-- /.content-header -->

        <div class="content"><!-- Main content -->
            <div class="container-fluid">

                <div class="items">
                    <div class="card">
                        <div class="items__header card-header d-flex align-items-baseline justify-content-between">
                            <h1 class="m-0 text-dark">Tasks</h1>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search by title" v-model="search"/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="searchTitle" > Search </button>
                                </div>
                            </div>
                            <div class="card-tools">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                            </div>
                        </div><!-- /.card-header -->
                        <div class="items__body card-body">
                            <table id="tasks" class="table table-hover">
                                <thead class="thead">
                                    <tr class="row">
                                        <th class="col border-0">ID</th>
                                        <th class="col border-0">Author</th>
                                        <th class="col border-0">Dev</th>
                                        <th class="col border-0">Title</th>
                                        <!-- <th class="col border-0">Comment</th> -->
                                        <th class="col border-0">Completed</th>
                                        <th class="col border-0">Priority</th>
                                        <th class="col border-0">Deadline</th>
                                        <th class="col border-0">Created</th>
                                        <th class="col text-right d-none d-sm-block border-0">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="row" v-for="(task, index) in tasks" :key="index">
                                    <!-- <router-link v-for="(task, index) in tasks" :to="{ name: 'task-details', params: { id: task.id } }" tag="tr"> -->
                                        <td class="col" scope="row">{{task.id}}</td>
                                        <td class="col">{{task.author.name}}</td>
                                        <td class="col">{{task.dev.name}}</td>
                                        <td class="col">{{task.title}}</td>
                                        <td class="col">{{task.completed}}</td>
                                        <td class="col">{{task.priority}}</td>
                                        <td class="col">{{task.deadline}}</td>
                                        <td class="col">{{task.created_at}}</td>
                                        <td class="col items__body__buttons d-flex justify-content-end align-items-start">
                                            <!-- <a :href="'/admin/tasks/' + task.id" class="m-1 d-block float-right" data-id="task.id"> -->
                                            <router-link :to="{ name: 'task-details', params: { id: task.id } }" class="m-1 d-block float-right">
                                                <button type="button" class="btn btn-sm btn-primary  d-flex align-items-center justify-content-between">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                            </router-link>
                                            <!-- </a> -->
                                            <a href="#" class="m-1 d-block float-right" data-id="task.id" @click="editModalWindow(task)">
                                                <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                            </a>
                                            <a href="#" class="m-1 d-block float-right" data-id="task.id" @click="deleteTask(task.id)">
                                                <button type="button" class="btn btn-sm btn-danger d-flex align-items-center justify-content-between">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </a>
                                        </td>
                                    <!-- </router-link> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- /.card-body -->
                        <div class="card-tools row">
                            <div class="col-12">
                                <div class="d-flex justify-content-start align-tasks-center">
                                    <button v-if="next" type="button" @click="navigate(next)" class="m-2 btn btn-primary">Next</button>
                                    <button v-if="prev" type="button" @click="navigate(prev)" class="m-2 btn btn-primary">Previous</button>
                                </div>
                            </div>
                        </div>
                    </div><!-- /.card -->
                </div>

            </div>
        </div> <!-- content -->

                <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New task</h5>
                                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update task</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form @submit.prevent="editMode ? updateTask() : saveTask()">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <select name="dev_id" v-model="form.dev_id" ref="dev_id" id="dev_id" class="form-control">
                                            <option v-for="d in devs" :value="d.id">{{ d.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.title" type="text" name="title" ref="title" placeholder="title" class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.comment" type="text" name="comment" ref="comment" placeholder="comment" class="form-control" :class="{ 'is-invalid': form.errors.has('comment') }">
                                        <has-error :form="form" field="comment"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <!-- <input v-model="form.completed" type="text" name="completed" ref="completed" placeholder="completed" class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                                        <has-error :form="form" field="completed"></has-error> -->
                                        <select name="completed" v-model="form.completed" ref="completed" id="completed" class="form-control">
                                            <!-- <option value="">Please select one</option> -->
                                            <!-- <option value="notstarted">Not started</option>
                                            <option value="canceled">Canceled</option>
                                            <option value="inprogress">In progress</option>
                                            <option value="completed">Completed</option> -->
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <!-- <input class="form-control" type="datetime-local" value="" name="date" /> -->
                                        <input type="date" name="deadline" ref="deadline" v-model="form.deadline" class="form-control">
                                        <has-error :form="form" field="deadline"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <select name="priority" v-model="form.priority" ref="priority" id="priority" class="form-control">
                                            <option value="nopriority">No priority</option>
                                            <option value="low">Low</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button v-show="editMode" type="submit" class="btn btn-primary">Update</button>
                                    <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!-- .modal -->

    </div>
</template>

<script>
import TaskDataService from "../services/service";

export default {
    name: "tasks-list",
    data() {
        return {
            tasks: [],
            devs: [],
            search: "",
            editMode: false,
            next: null,
            prev: null,
            form: new Form({
                 id: '',
                // user_id: '',
                dev_id: '',
                title: '',
                comment: '',
                completed: '',
                deadline: '',
                priority: '',
            }),
        };
    },
    methods: {
        openModalWindow(){
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },
        editModalWindow(task){
            this.editMode = true
            this.form.reset();
            $('#addNew').modal('show');
            this.form.id = task.id;
            this.form.dev_id = task.dev_id;
            this.form.title = task.title;
            this.form.comment = task.comment;
            this.form.completed = task.completed;
            this.form.deadline = task.deadline;
            this.form.priority = task.priority;
        },
        getAuthors(address) {
            axios.get(address ? address : "/api/users").then(response => {
                this.devs = response.data.data;
            });
        },
        saveTask() {
            console.log(this.form);
            this.$Progress.start();
            TaskDataService.createTask(this.form)
            .then(response => {
                // this.form.id = response.data.id;
                // console.log(response.data);
                this.retrieveTasks();
                $('#addNew').modal('hide');
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateTask() {
            this.$Progress.start();
            TaskDataService.updateTask(this.form)
            .then(response => {
                // console.log(response.data);
                // this.message = 'The task was updated successfully!';
                this.retrieveTasks();
                $('#addNew').modal('hide');
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteTask(id) {
            this.$Progress.start();
            TaskDataService.deleteTask(id)
            .then(response => {
                // console.log(response.data);
                // this.$router.push({ name: "tasks" });
                this.retrieveTasks();
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveTasks(address) {
            this.$Progress.start();
            TaskDataService.getAllTasks(address)
            .then(response => {
                this.tasks = response.data.data;
                this.prev = response.data.links.prev;
                this.next = response.data.links.next;
                this.$Progress.finish();
                // console.log(response.data.links);
            })
            .catch(e => {
                console.log(e);
            });
        },
        navigate(address) {
            this.retrieveTasks(address);
        },
        searchTitle() {
            this.$Progress.start();
            TaskDataService.findTask(this.search)
            .then(response => {
                this.tasks = response.data;
                console.log(response.data);
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.retrieveTasks();
        this.getAuthors();
    }
};
</script>
