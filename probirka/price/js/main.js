/* строка  при навередниии на ячейки которой будет появляться "крест" */
  row = document.getElementsByClassName('hover-col');

/* столбец  при навередниии на ячейки которого будет появляться "крест" */
  // col = ['col-1','col-2','col-3','col-4'];


/* убираем бэкграйнд для tr */
  function row_hover_off(id,e) {
    $(row[id])
     .parents( "tr" )
       .removeClass( "active" );
  }
  for(var i = 0; i < row.length; i++) {
    row[i].addEventListener('mouseout', row_hover_off.bind(this,i));
  }
/* убираем бэкграйнд для tr */

/* добавляем бэкграйнд для tr при ховере на td */
  function row_hover(id,e) {
    $(row[id])
     .parents( "tr" )
       .addClass( "active" );
  }
  for(var i = 0; i < row.length; i++) {
    row[i].addEventListener('mouseover', row_hover.bind(this,i));
  }
/* добавляем бэкграйнд для tr при ховере на td */
