# AWS Cognito - React

- Install packages

```bash
yarn add amazon-cognito-identity-js
```

### AWS Console.

1. Create user pools. <br/>
   Leave default.
2. Create client app. <br/>
   (dont chose client secrete key )<br/>

##### Signup success response

Log:

```bash
user: CognitoUser, userConfirmed: false, userSub: '4a9bedcb-d91f-4f49-b130-741e95dfce4e', codeDeliveryDetails: {…}}
codeDeliveryDetails: {AttributeName: 'email', DeliveryMedium: 'EMAIL', Destination: 't***@g***'}
user: CognitoUser
Session: null
authenticationFlowType: "USER_SRP_AUTH"
client: Client {endpoint: 'https://cognito-idp.ap-northeast-1.amazonaws.com/', fetchOptions: {…}}
keyPrefix: "CognitoIdentityServiceProvider.45r7tivvj34a94ngb6fvt54pk3"
pool: CognitoUserPool {userPoolId: 'ap-northeast-1_DYRyZ07U9', clientId: '45r7tivvj34a94ngb6fvt54pk3', client: Client, advancedSecurityDataCollectionFlag: true, storage: Storage}
signInUserSession: null
storage: Storage {CognitoIdentityServiceProvider.45r7tivvj34a94ngb6fvt54pk3.4a9bedcb-d91f-4f49-b130-741e95dfce4e.accessToken: 'eyJraWQiOiJkQkNLVjN0OGtxU0RUU2FvTDA1d1NcL2dyU1duZU…VXKGwSZozUsYSexAX6QIuZIkysx82lvFmEiUqHGU0eo3CeyMg', persist:root: '{"counter":"3","islogged":"false","_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}', CognitoIdentityServiceProvider.45r7tivvj34a94ngb6fvt54pk3.4a9bedcb-d91f-4f49-b130-741e95dfce4e.refreshToken: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUl…-9uKQNMzX7qR5RrBjAJrZnYEHM.1gI0Vbj9MDrZ_Mhv7pj8QA', CognitoIdentityServiceProvider.45r7tivvj34a94ngb6fvt54pk3.4a9bedcb-d91f-4f49-b130-741e95dfce4e.idToken: 'eyJraWQiOiJBcUhiZk9sY2ZJU3VmeXpcL0dXYVI5eEVsZGlEaH…qMXAVfnHQQciOR7TQp3W4Lu1kgH87w9aOdLEQOkgN-VsAuudA', nextauth.message: '{"event":"session","data":{"trigger":"getSession"}…tId":"ahk9n0axheko2edm1r","timestamp":1619671308}', …}
userDataKey: "CognitoIdentityServiceProvider.45r7tivvj34a94ngb6fvt54pk3.testabc@gmail.com.userData"
username: "testabc@gmail.com"
userConfirmed: false
userSub: "4a9bedcb-d91f-4f49-b130-741e95dfce4e"

```

#####

sign in thành công

```
accessToken: CognitoAccessToken
jwtToken: "eyJraWQiOiJkQkNLVjN0OGtxU0RUU2FvTDA1d1NcL2dyU1duZUJIUExSUzhBZityK2Y3WT0iLCJhbGciOiJSUzI1NiJ9.eyJvcmlnaW5fanRpIjoiMmE4MWQ4NzQtZDIyNy00ZjA4LWE5NmEtNGQzNWFlNjgzMGI3Iiwic3ViIjoiNGE5YmVkY2ItZDkxZi00ZjQ5LWIxMzAtNzQxZTk1ZGZjZTRlIiwiZXZlbnRfaWQiOiI2OTU1ZmM4OC02Nzk1LTRkNWMtOThiMS1jYzNlMDBjYTczMmMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ3OTIxODk4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfRFlSeVowN1U5IiwiZXhwIjoxNjQ3OTI1NDk4LCJpYXQiOjE2NDc5MjE4OTgsImp0aSI6IjAwY2M1NDMwLWUxMTItNDhkZC05OTdlLThhZWVhN2M3M2FjZiIsImNsaWVudF9pZCI6IjQ1cjd0aXZ2ajM0YTk0bmdiNmZ2dDU0cGszIiwidXNlcm5hbWUiOiI0YTliZWRjYi1kOTFmLTRmNDktYjEzMC03NDFlOTVkZmNlNGUifQ.Z7dh1cFmCoH5gSYadT6raUCKwO5_5ucd3ZmeQCsYPX3CkJtlLuO5aiLNRnLrKNB7sOxypvRTE9pWdn47PGCFqh9cHnNrBg6cm5Sasb5l6FD8zP56xOVejeji_MkdsDMAYfkS42o2JQKV3O3TxtGSrKgkwG_9fdgo8BF1XP5SRUM2QpIYcSllhtC-qDKOIE3S2wPttghbR7WJ2trKVff_qhvS450i8vK12j-5H2seWi55CQW23_9bUYr7I1rBskpor69DLvoc5hFNZtCNR2yMcDbQ258fBjY1lKGp_VXKGwSZozUsYSexAX6QIuZIkysx82lvFmEiUqHGU0eo3CeyMg"
payload:
auth_time: 1647921898
client_id: "45r7tivvj34a94ngb6fvt54pk3"
event_id: "6955fc88-6795-4d5c-98b1-cc3e00ca732c"
exp: 1647925498
iat: 1647921898
iss: "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_DYRyZ07U9"
jti: "00cc5430-e112-48dd-997e-8aeea7c73acf"
origin_jti: "2a81d874-d227-4f08-a96a-4d35ae6830b7"
scope: "aws.cognito.signin.user.admin"
sub: "4a9bedcb-d91f-4f49-b130-741e95dfce4e"
token_use: "access"
username: "4a9bedcb-d91f-4f49-b130-741e95dfce4e"
clockDrift: 0
idToken: CognitoIdToken {jwtToken: 'eyJraWQiOiJBcUhiZk9sY2ZJU3VmeXpcL0dXYVI5eEVsZGlEaH…qMXAVfnHQQciOR7TQp3W4Lu1kgH87w9aOdLEQOkgN-VsAuudA', payload: {…}}
refreshToken: CognitoRefreshToken {token: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUl…-9uKQNMzX7qR5RrBjAJrZnYEHM.1gI0Vbj9MDrZ_Mhv7pj8QA'}
```

#### Error

Because user have not been confirmed.<br/>
(aviod email span so email need confirm)

```bash
UserNotConfirmedException: User is not confirmed.
    at http://localhost:3000/static/js/bundle.js:2529:19
```
