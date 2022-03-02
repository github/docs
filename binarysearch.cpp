#include <iostream>

using namespace std;

int binarysearch(int a[],int n,int key){
    int left=0;
    int right=n-1;
    while(left<=right){
        int mid=(left+right)/2;
        if(a[mid]==key){
            return mid;
        }
        if(a[mid]>key){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
}
int bubblesort(int a[],int n){
    for(int i=0;i<n-1;i++){//Passes
        for(int j=0;j<n-i-1;j++)//Numbers Increment
        {
            if(a[j]>a[j+1]){
                int temp=a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
    }
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}
int main()
{
    int a[10]={10,20,30,40,5,6,33,65,-4,100},no,pos;
    cout<<"Enter Element to be searched"<<endl;
    cin>>no;
    bubblesort(a,10);
    pos =binarysearch(a,10,65);
    if(pos!=-1){
        cout<<"\n Element is found at "<<pos<<" Index";
    }
    else{
        cout<<"\n Element is not found";
    }
    return 0;
}
