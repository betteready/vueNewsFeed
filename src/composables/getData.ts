import contentdata from "@/data/db"
import { ref } from "vue";

function getData(){
    const contents = ref(contentdata);
    return { 
        contents
    }; 
}

export default getData;