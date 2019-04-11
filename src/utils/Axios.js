import axios from 'axios';
import Axios from 'axios';
let baseUrl = 'http://66.112.216.237:2010';
function myPost(url,data){
	return new Promise((resolve,reject)=>{
		let loading = this.$loading({
			lock: true,
			text: 'Loading',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});
		Axios.post({
			url: baseUrl + url,
			method:'post',
			data: data,
		}).then(res=>{
			loading.close();
			resolve(res);
		}).catch(err=>{
			loading.close();
			reject(err);
		})
	})
};

export default myPost;


