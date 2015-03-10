	 $(document).ready(function(){
	 $("#add").click(function(){
	 $('#table1 tr').last().after('<tr><td width="25%"></td><td width="25%"></td><td width="23%"></td><td width="2%"><input type="button" value="X" onclick="deleteRow(this)"></td></tr>');
	 });	 
	 });