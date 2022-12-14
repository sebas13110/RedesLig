const axios = require('axios');
const { json } = require('body-parser');
//const { param } = require('./rutas');

const estado = "02";
const bodyParser = require('body-parser');



const getDatos = async (req, res) => {
    const params = {
        api_key: '8tk8t3c6moN3PdJKiFsRU18dtjmfz7jWq3vdJGuj',
        date: req.query.date,
    }

    const url = 'https://api.nasa.gov/planetary/apod/';
    axios.get(url, { params })
        .then(response => {
            //console.log(response);
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            res.json(jsonRes)
        })
        .catch(function (error) {
            res.status(400).json({
                message: 'fecha mala'
            })
            console.log(error);
        });
}



const getIne = async (req, res) => {

    const url = 'https://gaia.inegi.org.mx/wscatgeo/mgee/';
    axios.get(url)
        .then(response => {
            //console.log(response);
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            res.json(jsonRes);
        })
        .catch(function (error) {
            console.log(error);
        });
        //console.log(req);
}
const getLeague = async (req, res) => {
    const params = {
        api_key: '8tk8t3c6moN3PdJKiFsRU18dtjmfz7jWq3vdJGuj',
        date: req.query.date,
    }
    const key = "RGAPI-5eccc692-d47b-44ac-848c-232764757766"
    var summonerName= "Sellx"
    const url = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summonerName+'?api_key='+key;
    
    axios.get(url)
        .then(response => {
            
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            res.json(jsonRes)
        })
        .catch(function (error) {
            res.status(400).json({
                message: 'fecha mala'
            })
            //console.log(error);
        });
}
const getChamp = async (req,res) => {
    const llave = 'AIzaSyA-dHiMpGoVNwfnvlAaqF0qeNT2E6H6rgk';
    const region = 'Aatrox%20Combos'
    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&q='+region+'&maxResults=25&key='+llave;
    axios.get(url)
    .then((response) =>{
        console.log(response);
        const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }
        res.json(jsonRes);
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports = {
    getIne, getDatos, getLeague,getChamp
}