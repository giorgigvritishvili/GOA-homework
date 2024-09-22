from turtle import   *


#we want to paint a house

#step 1:  draw a spuare
speed()
width(7)
color("purple")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end of square

#drawing of a door


forward(70)
color("yellow")
left(90)

forward(120)

right(90)

forward(60)  #height of the door

right(90)

forward(120)


penup()
goto(200, 200)
pendown()

color("red")

right(150)

forward(200)
left(120)

forward(200)



exitonclick()