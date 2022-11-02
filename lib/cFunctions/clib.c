#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Time calculator

float timerSort(float start , float end){
    float duration = (((double)end - start)/CLOCKS_PER_SEC);
    return duration;
}

// ? start create sorted functions

// * bubble sort
float bubble(int *tab , int length){
    clock_t start, end;
    start = clock();
    int changer;
    int temp;
    do
    {
        changer = 0;
        for(int i = 0; i < length-1; i++){
            if (tab[i] > tab[i+1])
            {
                temp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = temp;
                
                // change the value of changer to keep function work
                changer = 1;
            }
        }
    } while (changer != 0);
    end = clock();
    return timerSort(start , end);
}

// * selecetion sort
float selection(int *tab , int length){
    clock_t start, end;
    start = clock();

    int maxNumber;
    int posMax;

    int tempLen = length;
    while (length != 0)
    {
        maxNumber = tab[0] ; // put the first element of table as the biger number
        posMax = 0; // the index of the biger number    
        // * get the biger number in the array
        for (int i = 0; i < length; i++)
        {
            if (tab[i] > maxNumber)
            {
                maxNumber = tab[i];
                posMax = i;
            }
        }
        // * push the biger number in the end 
        // ? we need to start from the <posMAx>
        for (int j = posMax; j < length; j++)
        {
            tab[j] = tab[j+1];
        }
        // * the last index is empty we should to initialize the value of biger number in it
        tab[length-1] = maxNumber;
        // * decrement the length
        length--;
        
    }

    end = clock();
    return timerSort(start , end);
}

// * insertion sort