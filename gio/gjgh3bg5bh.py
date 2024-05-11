import turtle
import math
def draw_circle(turtle,radius,color):
    turtle.penup()
    turtle.goto(o,radius)
    turtle.pendown()
    turtle.color(color)
    turtle.circle(radius)
    def draw_text(turtle,text,font_size,x,y,color):
       turtle.penup()
       turtle.goto(x,y) 
       turtle.pendown()
       turtle.color(color)
       turtle.write(text,align="ceter", font=("arial",font_size,"normal"))
    def draw_star(turtle,color):
                    turtle.color(color)
                    turtle.begin_fill
