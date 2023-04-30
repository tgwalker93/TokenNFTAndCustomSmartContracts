import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "./utils/API";
import {CommentContainer, CommentPanel } from "../components/CommentContainer";
import Rating from 'react-rating';
import starIcon from '../images/star-full.png';
import noStarIcon from '../images/star-empty.png';
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import {
    ThirdwebNftMedia,
    useAddress,
    useContractRead,
    useMetadata,
    useTokenBalance,
    Web3Button,
    ConnectWallet,
    useSigner,
    useContract,
    useContractWrite,
  } from "@thirdweb-dev/react";


class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formErrors: { name: "" },
            location: null,
            id: null,
            currentComment: "",
            currentUserName: "Anonymous",
            currentRating: 0,
            newBalance: "0",
            currentWalletAddress: this.props.currentWalletAddress,
            signer: this.props.signer,
        };

    }

    async getCurrentBalance() {
        const sdk = new ThirdwebSDK("goerli");
        const contract = await sdk.getContract("0xA8d5dFcB52577c201A0555fb2e929f9433886CBF");
        //const walletAddress = "0x577E00647e99D654F32f226b269d03d2Efd77604";
        //const currentAddress = getAddress()
        //console.log(currentAddress)
        //const currentAddress = useAddress();
        var walletAddress = this.state.currentWalletAddress;
        await contract.erc20.balanceOf(walletAddress).then(
                        (result) => {
                            console.log(result)
                            this.setState({
                                newBalance: result.displayValue + " " + result.symbol,
                            });
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
        
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    //This method will handle all the form validation
    validateFields() {   


    }

    //Here we check if the field has an error. If it does, it will add the "has-error" class to the field.
    //"has-error" is a default bootstrap class that will nicely color the outline of the field red to indicate an error for the user. 
    errorClass(error) {
        return (error.length === 0 ? "" : "has-error");
    }

    //This is used onBlur in order to trim the values. 
    formatInput = (event) => {
        const attribute = event.target.getAttribute('name')
        this.setState({ [attribute]: event.target.value.trim() })
    }


    handleFormSubmit = event => {
        event.preventDefault();
        this.validateFields();
    };




    async getAllComments() {

        // Address of the wallet you want to send the tokens to
        // const toAddress = "0x...";
        // // The amount of tokens you want to send
        // const amount = 0.1;
        // await contract.erc20.transfer(toAddress, amount);
        // API.getComments()
        //     .then(response => {
        //         if (!response.data.error) {
        //             var listing = response.data.doc;
        //             listing.comments.sort(function(a,b){
        //                 // Turn your strings into dates, and then subtract them
        //                 // to get a value that is either negative, positive, or zero.
        //                 return new Date(b.timestamp.replace(" at ", " ")) - new Date(a.timestamp.replace(" at ", " "));
        //               });
        //             this.setState({ 
        //                 comments: listing.comments
        //             })
        //         } else {
        //             this.setState({ errorResponse: response.data.error })
        //         }
        //     }).catch(err => console.log(err));

    }

    //CALLS THIS WHEN THE COMPONENT MOUNTS, basically "on page load"
    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
        this.getCurrentBalance();
        this.getAllComments();

     } 

     async addComment() {

        console.log("i'm in add comment");
        console.log(this.state.currentComment);
        console.log(this.state.currentRating);
        const signer = this.state.signer;
        console.log(signer)
        const sdk = new ThirdwebSDK("goerli");
        //const sdk = new ThirdwebSDK.fromSigner(signer.provider);
        const contract = await sdk.getContract("0x0446D2391589712B49AFD29C5a30F666fD5b7D9a");


        // var amount = this.state.currentRating;
        // //await contract.erc20.mintTo(this.state.currentWalletAddress, amount);

        // contract.erc1155.claim(this.state.currentRating);

        // const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim")

        // const call = async () => {
        //   try {
        //     const data = await claim({ args: [this.state.currentRating] });
        //     console.info("contract call successs", data);
        //   } catch (err) {
        //     console.error("contract call failure", err);
        //   }
        // };
        // if (this.state.currentComment) {
        //     var commentObj = {
        //         text: this.state.currentComment,
        //         userWhoMadeComment: this.state.currentUserName,
        //         cryptoProjectID: this.state.id,
        //         ticker: this.state.ticker,
        //         rating: this.state.currentRating
        //     }
        //     API.saveComment(commentObj)
        //         .then(res => {
        //             this.getAllComments()
        //         })
        //         .catch(err => console.log(err));
        // }
    }

    handleStarRatingChange = (rating) => {
        this.setState({ 
            currentRating: rating
        })

    }

    render() {
        return (
             <Container id="containerViewCryptoProjects" fluid="true">
                <Row id="mainRow">
                    <Col size="sm-12">
                    <ConnectWallet colorMode="dark" />
                        <br />
                        <br />

                        <br />
                        <br />
                        <h3>Overflowcoin balance: {this.state.newBalance}</h3>
                        <div id="addReviewPanel" className="card">
                        <div className="card-body">
                            <div>
                            <Rating
                                initialRating={this.state.currentRating}
                                emptySymbol={<img src={noStarIcon} className="icon" />}
                                fullSymbol={<img src={starIcon} className="icon" />}
                                onChange={this.handleStarRatingChange}
                                />

                            <br />
                            <br />
                            <textarea 
                                placeholder='Leave a comments...'
                                id="currentComment"
                                cols="80" rows="10"
                                onBlur={this.formatInput.bind(this)}
                                value={this.state.currentComment}
                                onChange={this.handleChange.bind(this)}
                                name="currentComment"
                            ></textarea>
                            <Input placeholder='Username (default: anonymous)'
                                id="currentUserName"
                                onBlur={this.formatInput.bind(this)}
                                value={this.state.currentUserName}
                                onChange={this.handleChange.bind(this)}
                                name="currentUserName"
                            />
                            <br />
                            <br />
{/* 
                            <FormBtn className='btn btn-success save' onClick={() => this.addComment()}>Save Review</FormBtn> */}
                                                    <Web3Button
                            contractAddress="0x0446D2391589712B49AFD29C5a30F666fD5b7D9a"
                            action={(contract) => {
                                contract.call("claim", [this.state.currentRating])
                            }}
                            >
                        Save and Claim Reward
                                </Web3Button>
                            </div>
                        </div>
                        </div>
                    
                    <h2> Comments</h2>
                    <hr />
                    {this.state.comments?.length ? (
                        <CommentContainer>
                            <div className="CommentContainer">
                                {this.state.comments.map(comment => {
                                    return (
                                        <div key={comment._id}>
                                            <CommentPanel key={comment._id} name={comment.userWhoMadeComment} text={comment.text} date={comment.timestamp}>
                                            <Rating initialRating={comment.rating} 
                                                    emptySymbol={<img src={noStarIcon} className="icon" />}
                                                    fullSymbol={<img src={starIcon} className="icon" />}
                                                    readonly />
                                                    <br />
                                                    <br />
                                            </CommentPanel>
                                        </div>
                                    );
                                })}
                            </div>
                        </CommentContainer>
                    ) : (
                            <h3> There are no comments! </h3>
                        )}

                    </Col>

                </Row>

            </Container>
        );
    }
}

export default QuestionsPage;