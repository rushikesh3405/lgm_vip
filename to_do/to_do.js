function add(){
	document.getElementById('span').innerHTML="";
	var text=document.getElementById('text').value;
	if(text==''){
		document.getElementById('span').innerHTML='please enter value';
	}else{
		var ul=document.getElementById('ul');
		var li=document.createElement('li');
		li.textContent=text;
		ul.appendChild(li);
		var a=document.createElement('a');
		a.textContent='x';
		a.style.overflow='hidden';
		a.style.float='right';
		a.style.marginRight='20px'
		a.href='javascript:void(0)';
		a.className='remove';
		li.appendChild(a);

	}
}
var btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
	var ul=document.getElementById('ul');
	var li=e.target.parentNode;
	ul.removeChild(li);
});