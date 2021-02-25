

const mongoose = require('mongoose');
const { Schema } = mongoose;

const home = new Schema({
    titulo:{
        type: String
    },
    subtitulo:{
        type: String
    },


    servUmIcone:{
        type: String
    },
    servUmTitulo:{
        type: String
    },
    servUmDescricao:{
        type: String
    },


    servDoisIcone:{
        type: String
    },
    servDoisTitulo:{
        type: String
    },
    servDoisDescricao:{
        type: String
    },


    servTresIcone:{
        type: String
    },
    servTresTitulo:{
        type: String
    },
    servTresDescricao:{
        type: String
    },
  },
  {
      timestamps: true,
  });

  mongoose.model('Home',home);