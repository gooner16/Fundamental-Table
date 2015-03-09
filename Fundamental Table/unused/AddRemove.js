	 $(document).ready(function(){
	 var cnt = 2;
	 $("#add").click(function(){
	 $('#table1 tr').last().after('<tr><td width="25%"></td><td width="25%"></td><td width="25%"></td><td width="2%"><input type="button" onClick="remove()"></td></tr>');
	 cnt++;
	 });
	 
	$("#rem").click(function(){
	if($('#table1 tr').size()>2){
	 $('#table1 tr:last-child').remove();
	 }
	 });
	 
	 });