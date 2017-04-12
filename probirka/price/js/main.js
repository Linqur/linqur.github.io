/*************************
**ховерный крест для цен**
*************************/

  /* горизонтальная полоса */
      row = document.getElementsByClassName('hover-col');

      function row_hover(id,e) {
        $(row[id])
         .parents( "tr" )
           .addClass( "active" );
      }

      function row_hover_off(id,e) {
        $(row[id])
         .parents( "tr" )
           .removeClass( "active" );
      }

    for(var i = 0; i < row.length; i++) {
      row[i].addEventListener('mouseout', row_hover_off.bind(this,i));
      row[i].addEventListener('mouseover', row_hover.bind(this,i));
    }
  /*горизонтальная полоса*/

  /*Вертикальная полоса*/
    col_1 = document.getElementsByClassName('col-1');
    col_2 = document.getElementsByClassName('col-2');
    col_3 = document.getElementsByClassName('col-3');
    col_4 = document.getElementsByClassName('col-4');

    function col_hover(id,e) {
        for(var i = 0; i < this.length; i++){
          $(this[i])
            .addClass('active');
        }
    }

    function col_hover_off(id,e) {
        for(var i = 0; i < this.length; i++){
          $(this[i])
            .removeClass('active');
        }
    }

    for(var i = 1; i < col_1.length; i++) {
      col_1[i].addEventListener('mouseover', col_hover.bind(col_1,i));
      col_2[i].addEventListener('mouseover', col_hover.bind(col_2,i));
      col_3[i].addEventListener('mouseover', col_hover.bind(col_3,i));
      col_4[i].addEventListener('mouseover', col_hover.bind(col_4,i));
      col_1[i].addEventListener('mouseout', col_hover_off.bind(col_1,i));
      col_2[i].addEventListener('mouseout', col_hover_off.bind(col_2,i));
      col_3[i].addEventListener('mouseout', col_hover_off.bind(col_3,i));
      col_4[i].addEventListener('mouseout', col_hover_off.bind(col_4,i));
    }
  /*Вертикальная полоса*/
/*************************
**ховерный крест для цен**
*************************/
