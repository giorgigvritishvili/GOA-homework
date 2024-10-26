


int sum(int m);

/* test sum function */
int main ()
{
    int i, limit;
    i = 0;
    limit = 10;
    printf("Process ID is %d parent ID is %d\n",getpid(), getppid());
    
    //for (i = 0; i < 10; ++i)
     //   printf("jami 0-dan %d-mde aris %d\n", i, sum(i));
    i = sum(limit);
    printf("jami 0-dan %d-mde aris %d\n", limit, i);
    return 0;
}


/*  */
int sum( int n)
{
    int  p;
    if(n == 0)
        return 0;
    
   p = n + sum (n-1);
   return p;
}