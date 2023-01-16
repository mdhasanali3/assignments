#include <bits/stdc++.h>
#include <GL/gl.h>
#include <GL/glut.h>

using namespace std;

float xc, yc, x, y,r,d;

void display(void)
{
/* clear all pixels */
glClear (GL_COLOR_BUFFER_BIT);
/* draw white polygon (rectangle) with corners at
* (0.25, 0.25, 0.0) and (0.75, 0.75, 0.0)
*/
glEnd();

    glColor3f (0.0, 1.0, 0.0);
    glBegin(GL_POINTS);
  d=3-2*r;

	   glColor3f (0.0, 1.0, 1.0);
    glBegin(GL_POINTS);

	while(x<=y){

		if(d<=0){
		d=d+4*x+6;

		}
		else{
		d=d+4*(x-y)+10;
		y=y-1;
		}
		x=x+1;

		glVertex3f (((xc+x)/100),((yc+y)/100), 0.0);
		glVertex3f(((xc-x)/100),((yc-y)/100), 0.0);
		glVertex3f(((xc+x)/100),((yc-y)/100), 0.0);
		glVertex3f(((xc-x)/100),((yc+y)/100), 0.0);
		glVertex3f(((xc+y)/100),((yc+x)/100), 0.0);
		glVertex3f(((xc-y)/100),((yc-x)/100), 0.0);
		glVertex3f(((xc+y)/100),((yc-x)/100), 0.0);
		glVertex3f(((xc-y)/100),((yc+x)/100), 0.0);
cout<<" xc "<<xc<<" x "<<x<<" yc "<<yc<<" y "<<y<<" d "<<d<<endl;
        }
glEnd();

/* don't wait!
* start processing buffered OpenGL routines
*/
glFlush ();
}
void init (void)
{
/* select clearing (background) color */
glClearColor (0.0, 0.0, 0.0, 0.0);
/* initialize viewing values */
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
glOrtho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0);
/**
gluOrtho2D(-300, 300, 0, 600);

*/
}
/*
* Declare initial window size, position, and display mode
* (single buffer and RGBA). Open window with "hello"
* in its title bar. Call initialization routines.
* Register callback function to display graphics.
* Enter main loop and process events.
*/
int main(int argc, char** argv)
{
printf("Enter coordinates of center x & y : ");
	scanf("%f%f",&xc,&yc);

    printf("Enter radius: ");
    scanf("%f",&r);
    x=0;
    y=r;
glutInit(&argc, argv);
glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
glutInitWindowSize (500, 500);
glutInitWindowPosition (100, 100);
glutCreateWindow ("hello");
init ();
glutDisplayFunc(display);
glutMainLoop();
return 0; /* ISO C requires main to return int. */
}


















/*

d=3-2*r;
	x=0;
	y=r;
	   glColor3f (0.0, 1.0, 1.0);
    glBegin(GL_POINTS);

	while(x<=y){

		if(d<=0){
		d=d+4*x+6;

		}
		else{
		d=d+4*(x-y)+10;
		y=y-1;
		}
		x=x+1;

		glVertex3f (((xc+x)/100),((yc+y)/100), 0.0);
		glVertex3f(((xc-x)/100),((yc-y)/100), 0.0);
		glVertex3f(((xc+x)/100),((yc-y)/100), 0.0);
		glVertex3f(((xc-x)/100),((yc+y)/100), 0.0);
		glVertex3f(((xc+y)/100),((yc+x)/100), 0.0);
		glVertex3f(((xc-y)/100),((yc-x)/100), 0.0);
		glVertex3f(((xc+y)/100),((yc-x)/100), 0.0);
		glVertex3f(((xc-y)/100),((yc+x)/100), 0.0);
cout<<" xc "<<xc<<" x "<<x<<" yc "<<yc<<" y "<<y<<" d "<<d<<endl;

       }*/
