var myFavouriteMovies =
[
    {'name':'The Dark Knight', 'runtime':'132min', 'genre':'Action', 'rating':'8.5','release_date':'January 2004'},
    {'name':'Interstellar', 'runtime':'144min', 'genre':'Romantic', 'rating':'8.0','release_date':'July 2005'},
    {'name':'Shahzam', 'runtime':'154min', 'genre':'Documentary', 'rating':'7.5','release_date':'September 2010'},
    {'name':'Rick and Morty', 'runtime':'164min', 'genre':'Action', 'rating':'9.3','release_date':'September 2006'},
    {'name':'Shutter Island', 'runtime':'146min', 'genre':'Romantic', 'rating':'4.9','release_date':'December 2020'},
    {'name':'Kingsman', 'runtime':'132min', 'genre':'Action', 'rating':'7.5','release_date':'July 2004'},
    {'name':'The wizard of Oz', 'runtime':'180min', 'genre':'Romantic', 'rating':'8.3','release_date':'June 2006'},
    {'name':'India and China', 'runtime':'99min', 'genre':'Romantic', 'rating':'8.2','release_date':'April 2012'},
    {'name':'Maroon 5 Special', 'runtime':'74min', 'genre':'Suspense', 'rating':'8.7','release_date':'December 2004'},
    {'name':'Only one King', 'runtime':'136min', 'genre':'Suspense', 'rating':'9.5','release_date':'May 2008'},
    {'name':'Ballers', 'runtime':'194min', 'genre':'Suspense', 'rating':'9.1','release_date':'April 2018'},
    {'name':'Hello Kids', 'runtime':'132min', 'genre':'Thriller', 'rating':'7.5','release_date':'March 2004'},
    {'name':'Bullshit', 'runtime':'144min', 'genre':'Thriller', 'rating':'6.6','release_date':'June 2000'},
    {'name':'Moneyball', 'runtime':'144min', 'genre':'Thriller', 'rating':'7.8','release_date':'July 2019'},
    {'name':'Chivalry', 'runtime':'144min', 'genre':'Thriller', 'rating':'9.3','release_date':'May 2017'},
    {'name':'Good Times', 'runtime':'144min', 'genre':'Action', 'rating':'4.8','release_date':'November 2003'},
    {'name':'Sin', 'runtime':'144min', 'genre':'Action', 'rating':'5.8','release_date':'September 2001'},
    {'name':'Curveball', 'runtime':'132min', 'genre':'Action', 'rating':'8.7','release_date':'July 2004'},
    {'name':'JettDash', 'runtime':'126min', 'genre':'Comedy', 'rating':'5.9','release_date':'June 2003'},
    {'name':'Numero Uno', 'runtime':'95min', 'genre':'Comedy', 'rating':'7.5','release_date':'January 2007'},
    {'name':'Run it Back', 'runtime':'104min', 'genre':'Comedy', 'rating':'4.5','release_date':'February 2006'},
    {'name':'Lance Armstrong', 'runtime':'84min', 'genre':'Documentary', 'rating':'6.5','release_date':'March 2013'},
    {'name':'Discovery Special', 'runtime':'212min', 'genre':'Documentary', 'rating':'9.5','release_date':'April 2008'},
    {'name':'Ted Bundy', 'runtime':'194min', 'genre':'Documentary', 'rating':'8.1','release_date':'February 2006'},
    {'name':'Indian History', 'runtime':'174min', 'genre':'Documentary', 'rating':'7.9','release_date':'May 2016'},
    {'name':'De dana Dan', 'runtime':'104min', 'genre':'Comedy', 'rating':'6.5','release_date':'March 2020'},
    {'name':'Phir Hera Pheri', 'runtime':'104min', 'genre':'Comedy', 'rating':'7.5','release_date':'October 2018'},
    

]

var month = {"January" : 1, "February" : 2, "March" : 3, "April" : 4,"May": 5,"June" : 6, "July": 7, "August" : 8, "September" : 9, "October" : 10,"Novemeber": 11, "December" : 12};


buildTable(myFavouriteMovies)  //calling function on given array to dynamically build table

$(function(){
$(".hiddenfilters").hide(); //hides the filtering options when filter set to none
$("tr[id=kid]").hide();   //hides the nested table with similar genres

})


function buildTable(data){ 
    const table = document.getElementById('myTable')
    
    var row =`<tr class="mainhead table-bordered">
    <th>Name of the Movie</th>
    <th>Genre</th>
    <th>Rating</th>
    <th>Runtime</th>
    <th>Release date</th>
    </tr>`
    
    var map = {}  //using Hashmap to keep track of already used genres to avoid repeat rendering of elements
    table.innerHTML = ``;
    for (var i = 0; i < data.length ; i++){
        if(data[i].genre in map)
        continue;  //if genre already used in building table ignore and move to next

        row += `<tr id="${data[i].genre}" class="boss table-bordered">
                   <th>${data[i].name}</th>
                   <th id="genre">${data[i].genre}</th>
                   <th class="rating">${data[i].rating}</th>
                   <th class="runtime">${data[i].runtime}</th>
                   <th class="release"}">${data[i].release_date}</th>
                  </tr>`
                map[data[i].genre] = 1
        const ele = data[i].genre
        
        row += `<tr class="${data[i].genre}" id="kid">
                   <td id="subheading" colspan="5">Similar Movies</td>
                  </tr>`

        for(var j=i; j < data.length  ; j++)
        {   
            if (data[j].genre == ele && data[i].name !== data[j].name) //check all the similar movies with same genre and group them together
            {row += `<tr class="${data[i].genre}" id="kid">
            <td>${data[j].name}</td>
            <td>${data[j].genre}</td>
            <td class="rating">${data[j].rating}</td>
            <td class="runtime">${data[j].runtime}</td>
            <td class="release"}">${data[j].release_date}</td>
           </tr>`
        }
    }
        table.innerHTML += row //filling the table body with passed data
        row=``
    }
    }




$(function() {

    function changeColors(value_id, order, color) {

    }

    $("#selectField").on("change", function() {

        const selected = this.value;
        console.log(selected)
        if (selected != "None") {

            $(".hiddenfilters").show("slide", 500)
            $("input[name=num_val]").attr("placeholder","")
            $("#buttonGo").on('click',function(){
                const data_input = $("input[name=num_val]").val()
                const color_change =  $("#colorpicker").val()
                //console.log(color_change)
                $("#myTable tr").css("background-color","")
                changeColor(selected,color_change,sorting_order,data_input)

             })
            //  $("input[name=sort_order]") 
            //  .change(function(){ 
            //      if( $(this).is(":checked") ){ 
            //          var val = $(this).val(); 
            //          console.log(val)
            //      }
            //  })

            //  $("#colorpicker") 
            //  .on('change',function(){ 
                 
            //          const val = $(this).val(); 
            //          console.log(val)
            //  })
          
            if(selected == "runtime")
            {$("input[name=num_val]").val("")
            $("#sort_algos").text("minutes")}
             
            else if(selected == "rating")
           {   $("input[name=num_val]").val("")
               $("#sort_algos").text("points")
            }
            
            else
            {$("#sort_algos").text("date")
            $("input[name=num_val]").val("")
            $("input[name=num_val]").attr("placeholder","mm/yyyy")
        }
        
        } else {
            
            $(".hiddenfilters").hide("slide", 300);
            
    }

    });
});


$(".boss").on('click',function(){
    const childClass = "." + $(this).find("th#genre").text() 
    //console.log(childClass)
    const options = {};
    $(childClass).toggle(500) //toggle visibilty of similar movie rows upon clicking of main row
    
});


function changeColor(property, value_color, order, numericVal)
{   

    property = "." + property 
    //console.log(property,value_color,sorting_order,numericVal)

    $("#myTable tr").each(function(){
        var realVal = $(this).find(property).text()

    if(property == '.release' && realVal != "")
        {
           // console.log(realVal, "realval ka val")  
            const num = realVal.match(/\d+/g)[0];
            const letr =  month[realVal.match(/[a-zA-Z]+/g)[0]];
            const dataInput = numericVal.split("/")
            console.log(letr, dataInput[0], num, dataInput[1] )

            if(order=="more" && num >= dataInput[1])
            {
                if((num == dataInput[1] &&letr >= dataInput[0]) || num > dataInput[1] )
                $(this).css("background-color",value_color)
            }
           
           
            if(order=="less" && num <= dataInput[1])
            {
               if((num==dataInput[1] && letr <= dataInput[0]) || num < dataInput[1] )
                $(this).css("background-color",value_color)

            }
        }
    else{
        if(realVal != ""){   //check if value exists in that row

        if(property ==".runtime") realVal = parseFloat(realVal.match(/\d+/g)[0]);  //if runtime we need to extract the integer from string

        numericVal = parseFloat(numericVal)
   
        if(order=="more" && realVal >= numericVal )
        {
           
            $(this).css("background-color",value_color)
          
        }
        if (order=="less" && realVal <= numericVal )
        {
           
            $(this).css("background-color",value_color)
        }
        }  
    }  

    })

}

var toggled =  false
var sorting_order = "more"
function toggler(){   
    if(!toggled)
    {toggled = true;
    $(".myButton").text("Lesser than")
    sorting_order="less"}
    else
    {
        toggled = false;
        $(".myButton").text("Greater than")
        sorting_order= "more"
    } 

    console.log(toggled, sorting_order)
}



function clearer()
{
    $("#myTable tr").css("background-color","")
}
