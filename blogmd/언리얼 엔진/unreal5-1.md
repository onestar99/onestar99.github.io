# [언리얼 엔진5] 공부 Step 1

- 2024.04.29 게시


## UPROPERTY 매크로
- EditAnywhere
- BlueprintReadWrite
- Category=""

## UFUNCTION 매크로
- BlueprintCallable
- Category=""

언리얼 엔진에서 오브젝트의 변수가 초기화될 때 호출되는 함수는 PostInitProperties
변수가 수정될 때 호출되는 함수는 PostEditChangeProperty 이다.


AActor에서 상속받아서 사용 가능하다.



```C++
if (bPressedKey) {
    FVector Location = GetActorLocation();
    Location += FVector::UpVector * 980.0f * DeltaTime;
    SetActorLocation(Location);
}
```



## 궁금한 것들 정리하기

1. virtual 키워드는 왜 사용하는가?


2. 피직스 시뮬레이트가 무엇인지?
