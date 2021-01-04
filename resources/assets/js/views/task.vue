<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">#{{ task.id}} - {{ task.title}} </h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <!-- <div class="card-tools">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                                    </div> -->
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

                <div class="item">
                    <form class="card">
                        <div class="item__header card-header">
                            <div class="form-group">
                                <input type="text" class="form-control" id="title" name="title" v-model="task.title" placeholder="Title"/>
                                <has-error :form="form" field="title"></has-error>
                            </div>
                        </div>
                        <div class="item__body card-body">
                            <div class="row">
                                <div class="col-12 col-sm-8">
                                    <div class="form-group">
                                        <textarea name="comment" id="comment" class="form-control" v-model="task.comment">{{task.comment}}</textarea>
                                        <has-error :form="form" field="comment"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <select name="user_id" v-model="task.user_id" ref="user_id" id="user_id" class="form-control">
                                            <option v-for="d in authors" :value="d.id">{{ d.name }}</option>
                                        </select>
                                        <has-error :form="form" field="user_id"></has-error>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <select name="published" v-model="task.user_id" ref="published" id="published" class="form-control">
                                            <option value="">Please select one</option>
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                        </select>
                                        <label><strong>Status:</strong></label>
                                        {{ task.published ? "Published" : "Draft" }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item__footer card-header">
                            <div class="item__buttons d-flex justify-content-end align-items-start">
                                <a href="#" class="m-1 d-block float-right" data-id="task.id" @click="updateTask">
                                    <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                        Update <i class="fa fa-edit"></i>
                                    </button>
                                </a>
                                <a href="#" class="m-1 d-block float-right" data-id="task.id" @click="deleteTask">
                                    <button type="button" class="btn btn-sm btn-danger d-flex align-items-center justify-content-between">
                                        Delete <i class="fas fa-trash"></i>
                                    </button>
                                </a>
                            </div>
                            <p>{{ message }}</p>
                        </div>
                    </form>
                </div><!-- item -->

            </div>
        </div><!-- content -->
    </div>
</template>

<script>
import TaskDataService from "../services/service";

export default {
    name: "task",
    data() {
        return {
            task: null,
            authors: [],
            message: ''
        };
    },
    methods: {
        getAuthors(address) {
            axios.get(address ? address : "/api/users").then(response => {
                this.authors = response.data.data;
            });
        },
        getTask(id) {
            this.$Progress.start();
            TaskDataService.getTask(id)
            .then(response => {
                this.task = response.data.data;
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateTask() {
            console.log(this.form);

            this.$Progress.start();
            TaskDataService.updateTask(this.task)
            .then(response => {
                // console.log(response.data);
                this.message = 'The task was updated successfully!';
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteTask() {
            this.$Progress.start();
            TaskDataService.deleteTask(this.task.id)
            .then(response => {
                // console.log(response.data);
                this.$Progress.finish();
                this.$router.push({ name: "tasks" });
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = '';
        this.getTask(this.$route.params.id);
        this.getAuthors();
    }
};
</script>

