const Task = require('../models/task')

module.exports = {

    index: async(req, res) => {
        try {
            const tasks = await Task.find()
            if((tasks).length === 0){
                res.status(200).json({message: "Success", tasks: 'There are no tasks'}) 
            }else {
                res.json({message: "Success", tasks: tasks}) 
            }

        }catch (error) {
            console.log(error);
            res.status(500).json({message: "Error", error: error})
        }
    },

    addTask: async(req, res) => {
        try {
            let {title, description, completed} = req.body;
            Task.create({title: title, description: description, completed: completed});
            res.status(200).json({message: "Success", added: true});
        }catch (error){
            res.status(500).json({message: "Error", error: error})
        }
    },

    detailTask: async(req, res) => {
        try {
            let id = req.params.id;
            let detailTask = await Task.findById(id)
            console.log(detailTask);
            if(detailTask === null) detailTask = 'Not found'

            res.status(200).json({message: "Success", task: detailTask});
        }catch (error){
            res.status(500).json({message: "Error", error: error})
        }
    },

    editTask: async(req, res) => {
        try {
            let {id, title, description, completed} = req.body;
            const findTask = await Task.findByIdAndUpdate(id, {title: title, description: description, completed: completed})
            console.log("findTask::", findTask);
            
            res.status(200).json({message: "Success", task: findTask});
        }catch (error){
            res.status(500).json({message: "Error", error: error})
        }
    },

    deleteTask: async(req, res) => {
        try {
            let id = req.params.id;
            await Task.remove(id)
            res.status(200).json({message: "Success", task: 'Task deleted'});
        }catch (error){
            res.status(500).json({message: "Error", error: error})
        }
    }

}