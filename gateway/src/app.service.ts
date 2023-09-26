import {Injectable} from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {
    async getHello() {
        const response = await axios.get(
            `http://backendapp:3000` //Done host local and port local working
        );
        console.log(response.data);
        return response.data+'Hello World! i am gateway';
    }
}
