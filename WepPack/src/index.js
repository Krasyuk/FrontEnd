import *as $ from 'jquery'
import Post from "@models/post"
import json from "./assets/json"
import './babel'
import './styles/style.css'
import MyPhoto from './assets/9EvsYlNK_Vo'

const post = new Post("WepPack", MyPhoto)

$('pre').html(post.toString())

//console.log("Post to String : ", post.toString())

