	$(document).ready(function () {
            var table = $('#data').DataTable({
                "ajax": '../../../environmental-data/data.txt',
                data: data, // id таблицы
			    order: [[0, "desc"]],
				mark: true,
                 searchPanes: {columns: [1, 8],
			              viewTotal: true,
                          cascadePanes: true,
						  initCollapsed: true},
		        buttons:[
				        'searchBuilder' 
            ,
						{
							extend: 'colvis',
							collectionLayout: 'fixed columns',
							collectionTitle: 'Столбцы'
						},
						'pageLength'
			],
			lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 строк', '25 строк', '50 строк', 'Показать все' ]
			
			],
			language: {
				buttons: {
                colvis: 'Выбрать столбцы'
            },
			
			pageLength: {
                _: "Показано %d строк",
                '-1': "Показаны все строки"
            },
			
				searchBuilder: {
        add: 'Добавить',
        button: 'Расширенный поиск',
        clearAll: 'Сбросить все',
        condition: 'Условие',
        conditions :{
          date: {
            before: 'До',
            after: 'После',
            equals: 'Равно',
            not: 'Не равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          moment: {
            before: 'До',
            after: 'После',
            equals: 'Равно',
            not: 'Не равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          number: {
            equals: 'Равно',
            not: 'Не равно',
            gt: 'Меньше',
            gte: 'Меньше либо равно',
            lt: 'Больше',
            lte: 'Больше или равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          string: {
            contains: 'Содержит',
            empty: 'Пустое',
            notEmpty: 'Не пустое',
            equals: 'Равно',
            not: 'Не равно',
            endsWith: 'Оканчивается на',
            startsWith: 'Начинается на'
          },
        },
        data: 'Поле',
        logicAnd: 'И',
        logicOr: 'ИЛИ',
        title: {
          0: 'Условий поиска нет',
          _: 'Условия поиска (%d)'
        },
        deleteTitle: 'Удалить',
        leftTitle: 'Gauche',
        rightTitle: 'Droite',
        value: 'Значение',
      },
				info:           'Показаны с _START_ по _END_ из _TOTAL_ строк',
    infoEmpty:      'Показаны строки с 0  по 0 из 0 строк',
    infoFiltered:   '(Отфильтровано _MAX_ строк)',
    infoPostFix:    '',
    thousands:      ',',
    loadingRecords: 'Загрузка...',
    processing:     '',
    search:         'Поиск',
    zeroRecords:    'Совпадений не найдено',
				paginate: {
      previous: '&laquo;',
	  first: 'First page',
	  next: '&raquo;',
	  last: 'Last page'
	  
    },
            searchPanes: {
				count: '{total} found',
                countFiltered: '{shown} ({total})',
				clearMessage: 'Сбросить фильтры',
				collapseMessage: 'Свернуть фильтры',
				showMessage: 'Развернуть фильтры',
				loadMessage: 'Загрузка фильтров...',
				emptyPanes: 'Фильтры отсутствуют. :/',
				emptyMessage: "</i></b>EMPTY</b></i>",
                title: {
                    _: 'Активных фильтров — %d',
                    0: 'Активных фильтров нет',
                    1: 'Активен один фильтр'
                }
            }
        },
               dom: 'PBfrtip',
                columns: [
					{
                        data: null,
                        title: "ID",
                        class: "all",
                        sWidth: '10%',
                        visible: true,
						render: function(d) {if (d.ID) {return '<div class="cardid">' + d.ID + '</div>';} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Type",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Type) {return d.Type;} else {return 'Не заполнено'}  },
						searchPanes: {
                    orthogonal: 'sp'
                }
                    },
					{
                        data: null,
                        title: "Title",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Title) {return d.Title;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Year",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Year) {return d.Year;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Lang",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Lang) {return d.Lang;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Author",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Author) {return d.Author;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Abstract",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Abstract) {return d.Abstract;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Files",
                        class: "all",
                        sWidth: '5%',
                        visible: false,
						render: function(d) {if (d.Files) {return d.Files;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Tags",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Tags) {return d.Tags;} else {return 'Не заполнено'}  },
						searchPanes: {
                    orthogonal: 'sp'
                }
                    },
					{
                        data: null,
                        title: "Карточка",
                        class: "all",
                        sWidth: '90%',
                        visible: true,
						orderable: false,
						render: function(d) {return '<div class="cardheader">' + d.Type + ' · ' + d.Lang + ' · ' + d.Year + ' · ' + d.Author + '</div><div class="cardtitle">' + d.Title + '</div><div class="cardabstract">' + d.Abstract + '</div><div style="clear:both"></div><div style="margin-top:1em;font-size:0.9em"><svg style="width:14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#818181" d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>' + d.Tags.map(x => '<span style="font-size:0.9em;margin-left: 0.5em;color: #212529;background-color: #eceeef;padding-right: 0.6em;padding-left: 0.6em;border-radius: 10rem;" class="badge badge-pill badge-light">' + x + '</span>').join('') + '</div><div style="margin-top:0em;font-size:0.9em"><svg  style="width: 11px;margin-left: 3px;margin-top: -3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#818181" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>' + d.Files.map(x => '<span style="margin-left: 0.5em;">' + x + '</span>') + '</div><div style="margin-top:0.5em;font-size:0.9em"><svg style="width:14px;margin-left: 2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#818181" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg> ' + d.Author + ' ' + d.Title + '. ' + d.Year + '.' + d.Files.map(x => '<span style="margin-left: 0.5em;">[' + x + '](https://education.kurashev.com/environmental-data/files/' + x + ')</span>') + '</div>';}
                    },
					{
                        data: null,
                        title: "Теги и Файлы",
                        class: "all",
                        sWidth: '25%',
                        visible: false,
						orderable: false,
						render: function(d) {return '<div class="cardtags namelist line"><div class="tagtitle">Теги</div><p>' + d.Tags.join('</p><p>') + '</p></div><div class="cardtags namelist line"><div class="tagtitle">Файлы</div><p>' + d.Files.join('</p><p>') + '</p></div>';}
                    }
                ],
        initComplete: function() {
            this.api().searchPanes.rebuildPane();
        }
            });
        });






        $(document).ready(function () {
            var table = $('#laws-international').DataTable({
                "ajax": '../../../environmental-data/data.txt',
                data: laws-international, // id таблицы
			    order: [[0, "desc"]],
				mark: true,
                 searchPanes: {columns: [1, 8],
			              viewTotal: true,
                          cascadePanes: true,
						  initCollapsed: true},
		        buttons:[
				        'searchBuilder' 
            ,
						{
							extend: 'colvis',
							collectionLayout: 'fixed columns',
							collectionTitle: 'Столбцы'
						},
						'pageLength'
			],
			lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 строк', '25 строк', '50 строк', 'Показать все' ]
			
			],
			language: {
				buttons: {
                colvis: 'Выбрать столбцы'
            },
			
			pageLength: {
                _: "Показано %d строк",
                '-1': "Показаны все строки"
            },
			
				searchBuilder: {
        add: 'Добавить',
        button: 'Расширенный поиск',
        clearAll: 'Сбросить все',
        condition: 'Условие',
        conditions :{
          date: {
            before: 'До',
            after: 'После',
            equals: 'Равно',
            not: 'Не равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          moment: {
            before: 'До',
            after: 'После',
            equals: 'Равно',
            not: 'Не равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          number: {
            equals: 'Равно',
            not: 'Не равно',
            gt: 'Меньше',
            gte: 'Меньше либо равно',
            lt: 'Больше',
            lte: 'Больше или равно',
            between: 'Между',
            notBetween: 'Не между',
            empty: 'Пустое',
            notEmpty: 'Не пустое'
          },
          string: {
            contains: 'Содержит',
            empty: 'Пустое',
            notEmpty: 'Не пустое',
            equals: 'Равно',
            not: 'Не равно',
            endsWith: 'Оканчивается на',
            startsWith: 'Начинается на'
          },
        },
        data: 'Поле',
        logicAnd: 'И',
        logicOr: 'ИЛИ',
        title: {
          0: 'Условий поиска нет',
          _: 'Условия поиска (%d)'
        },
        deleteTitle: 'Удалить',
        leftTitle: 'Gauche',
        rightTitle: 'Droite',
        value: 'Значение',
      },
				info:           'Показаны с _START_ по _END_ из _TOTAL_ строк',
    infoEmpty:      'Показаны строки с 0  по 0 из 0 строк',
    infoFiltered:   '(Отфильтровано _MAX_ строк)',
    infoPostFix:    '',
    thousands:      ',',
    loadingRecords: 'Загрузка...',
    processing:     '',
    search:         'Поиск',
    zeroRecords:    'Совпадений не найдено',
				paginate: {
      previous: '&laquo;',
	  first: 'First page',
	  next: '&raquo;',
	  last: 'Last page'
	  
    },
            searchPanes: {
				count: '{total} found',
                countFiltered: '{shown} ({total})',
				clearMessage: 'Сбросить фильтры',
				collapseMessage: 'Свернуть фильтры',
				showMessage: 'Развернуть фильтры',
				loadMessage: 'Загрузка фильтров...',
				emptyPanes: 'Фильтры отсутствуют. :/',
				emptyMessage: "</i></b>EMPTY</b></i>",
                title: {
                    _: 'Активных фильтров — %d',
                    0: 'Активных фильтров нет',
                    1: 'Активен один фильтр'
                }
            }
        },
               dom: 'PBfrtip',
                columns: [
					{
                        data: null,
                        title: "ID",
                        class: "all",
                        sWidth: '10%',
                        visible: true,
						render: function(d) {if (d.ID) {return '<div class="cardid">' + d.ID + '</div>';} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Type",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Type) {return d.Type;} else {return 'Не заполнено'}  },
						searchPanes: {
                    orthogonal: 'sp'
                }
                    },
					{
                        data: null,
                        title: "Title",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Title) {return d.Title;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Year",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Year) {return d.Year;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Lang",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Lang) {return d.Lang;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Author",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Author) {return d.Author;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Abstract",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Abstract) {return d.Abstract;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Files",
                        class: "all",
                        sWidth: '5%',
                        visible: false,
						render: function(d) {if (d.Files) {return d.Files;} else {return 'Не заполнено'}  }
                    },
					{
                        data: null,
                        title: "Tags",
                        class: "all",
                        sWidth: '0%',
                        visible: false,
						render: function(d) {if (d.Tags) {return d.Tags;} else {return 'Не заполнено'}  },
						searchPanes: {
                    orthogonal: 'sp'
                }
                    },
					{
                        data: null,
                        title: "Карточка",
                        class: "all",
                        sWidth: '90%',
                        visible: true,
						orderable: false,
						render: function(d) {return '<div class="cardheader">' + d.Type + ' · ' + d.Lang + ' · ' + d.Year + ' · ' + d.Author + '</div><div class="cardtitle">' + d.Title + '</div><div class="cardabstract">' + d.Abstract + '</div><div style="clear:both"></div><div style="margin-top:1em;font-size:0.9em"><svg style="width:14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#818181" d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>' + d.Tags.map(x => '<span style="font-size:0.9em;margin-left: 0.5em;color: #212529;background-color: #eceeef;padding-right: 0.6em;padding-left: 0.6em;border-radius: 10rem;" class="badge badge-pill badge-light">' + x + '</span>').join('') + '</div><div style="margin-top:0em;font-size:0.9em"><svg  style="width: 11px;margin-left: 3px;margin-top: -3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#818181" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>' + d.Files.map(x => '<span style="margin-left: 0.5em;">' + x + '</span>') + '</div><div style="margin-top:0.5em;font-size:0.9em"><svg style="width:14px;margin-left: 2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#818181" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg> ' + d.Author + ' ' + d.Title + '. ' + d.Year + '.' + d.Files.map(x => '<span style="margin-left: 0.5em;">[' + x + '](https://education.kurashev.com/environmental-data/files/' + x + ')</span>') + '</div>';}
                    },
					{
                        data: null,
                        title: "Теги и Файлы",
                        class: "all",
                        sWidth: '25%',
                        visible: false,
						orderable: false,
						render: function(d) {return '<div class="cardtags namelist line"><div class="tagtitle">Теги</div><p>' + d.Tags.join('</p><p>') + '</p></div><div class="cardtags namelist line"><div class="tagtitle">Файлы</div><p>' + d.Files.join('</p><p>') + '</p></div>';}
                    }
                ],
        initComplete: function() {
            this.api().searchPanes.rebuildPane();
        }
            });
        });
