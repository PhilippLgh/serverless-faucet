import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';

function Highlight({ children }) {
  return <pre style={{ display: 'inline', borderLeft: 'none' }}>{children}</pre>
}

export default class App extends Component {
  state = {
    balance: ''
  }
  componentDidMount = () => {
    this.interval = setInterval(this.getBalance, 60 * 1000)
    this.getBalance()
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }
  getBalance = async () => {
    const provider = ethers.getDefaultProvider('goerli')
    const balance = await provider.getBalance('0x0A7e8bdB873a624faB464c39D965329f825FBA4D')
    this.setState({
      balance: ethers.utils.formatEther(balance)
    })
  }
  donate = async () => {
    if (!window.web3) {
      return alert('No web3 provider detected')
    }
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const network = await provider.getNetwork()
    if (network && network.chainId !== 5) {
      return alert('Please connect your provider to the goerli network first')
    }
    const signer = provider.getSigner();
    const tx = {
      to: "0x0A7e8bdB873a624faB464c39D965329f825FBA4D",
      value: ethers.utils.parseEther('100.0')
    }
    let _tx = await signer.sendTransaction(tx);
    alert('Thank you for your donation')
  }
  render() {
    const { balance } = this.state
    return (
      <div className="App" style={{
        margin: 50
      }}>
        <nav class="navigation">
          <h2>ethfaucet.org</h2>
        </nav>
        <div>Address: <Highlight>0x0A7e8bdB873a624faB464c39D965329f825FBA4D</Highlight></div>
        <div>Balance: <Highlight> {balance} </Highlight> GöEth  <button className="button button-outline" onClick={() => this.donate()}>Donate</button> </div>

        <p>
          This faucet helps to programmatically distribute test Ether for experiments and to try out Ethereum functionality without spending real money.
      </p>
        <h3>API</h3>
        <div>
          <p>The <Highlight>{'/faucet'}</Highlight> and <Highlight>{'/validator'}</Highlight> endpoints are captcha protected.</p>
          <p>In order to call them one first needs to acquire and solve a captcha challenge using the <Highlight>{'/captcha'}</Highlight> endpoint</p>
          <pre>
            <code>
              {"/captcha/:columns/:rows"}
            </code>
          </pre>
          <p>These two endpoints provide funding:</p>
          <p>The <Highlight>{'/faucet'}</Highlight> endpoint sends <Highlight>1.0 GöETH</Highlight> to <Highlight>:address</Highlight>.</p>
          <pre>
            <code>
              {"/faucet/:network/:address"}
            </code>
          </pre>
          <p>The <Highlight>{'/validator'}</Highlight> endpoint sends <Highlight>32.5 GöETH</Highlight> to <Highlight>:address</Highlight>.</p>
          <p>This endpoint is additionally IP protected and has a cooldown of 24 hours.</p>
          <pre>
            <code>
             {"/validator/:network/:address"}
            </code>
          </pre>
        </div>
        <div style={{
          display: 'flex'
        }}>
          <span>Contact:</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAYCAYAAACbfz1xAAABQWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAxsDEIMLAyWCUmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsgsyyN1dX4NrjmML5WyJqUJP8FUjwK4UlKLk4H0HyBOSi4oKmFgYEwAspXLSwpA7BYgW6QI6CggewaInQ5hrwGxkyDsA2A1IUHOQPYVIFsgOSMxBcgG2a2ThCSejsSG2gsCHKFGFq6mlgYEnEo6KEmtKAHRzvkFlUWZ6RklCo7AEEpV8MxL1tNRMDIwAloJCm+I6s9i4HBkFDuFEMt+xMBgac3AwPQZIZYQysCwNYaBgVcbIaY1n4FBMJOB4TB/QWJRItwBjN9YitOMjSBsniIGBtYf//9/lmVgYN/FwPC36P//33P///+7hIGB+SYDw4FCACQUXGCSnQQYAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAACloAMABAAAAAEAAAAYAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdLL7s+sAAAHVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE2NTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqs/0ObAAALTUlEQVRoBe1ZBYwUSxMu3N0dgru7HcHd3S1IkODuGjQ4BDk0OITg7gGCu7u7u9Srr/6/JzN7u9zthXu5F7aS3Znurrbq6qqvasKwEPnIJ4FQJIGwoWgtvqX4JKAS8CmlTxFCnQS8VsrXr1/T1KlT6cWLFx438+vXLxo/fjydP39eeS5cuEBz5syx+FetWkUbN260yv/lF9e9/Zf3EmrWDkzpDV2+fBkYlE+fPu2x24MHDzhMmDDcq1cv5Zk1axbHihXL4s+QIQPnz5/fKofEy48fP3j69Olcv359zpIlC2fOnJnbtGnD/v7+/PTp02BNefPmTd60aZOjr+veHI2+QrAkED4kbkeyZMnUSqZNm9bt8Lt376YIESK4bfsTlQ8fPqTGjRvTy5cvSRSRunfvTl+/fqV9+/bRvHnzaNiwYXTw4EFKnjy5V9Nt2bKFhg4d+lsv4dWAPma3EggRpcRMWbNmdTshKr1VBo8DuWn4/v07lSlThnLkyEGbN2+maNGiWVzFixenQYMGUZcuXah06dJ04MABSpQokdXuewkdEnBgylatWtG4ceMU72XPnp3ixYtHDRo0oLNnzwZYLSxP27ZtCVYRSjZkyBASW23x5c2bl9asWWOV7S8dOnSg3r17W1XZsmWjvXv30pgxYyhFihSUKlUq6tSpEwG/Gpo9ezbVqVOHBD6o0gkcoLJly9L69esNiz6Bd8OGDUvLli1Thfz27RsdPnxYx8J4Ai0UExctWtSxBnTGGmrXrk3x48cnKLC4ZmtsyGHkyJH05s0bEiiga7Ea5eXOnTtUpUoVihMnjravW7fO3qyWul+/fpQzZ06VWYsWLejWrVsWj9nftm3bqECBAo7LMnfuXCpVqpSeR/Xq1QmextD79+91vkOHDpkqfU6ZMoWqVatm1UHG6AfZ4yJmzJiRtm7dqt6kYcOGFDt2bBKYQwsWLLD6uHvBuWMfefLk0XEEHql8De+pU6d0PRcvXqQKFSroGQB3g6APMAYxY8YkPz8/EgiocsTeHWR3+tKBCxUqxMB8EydO5JkzZ7IIkVOmTMkS2CirwZTAhN26deOlS5eyHKTiTHGJ1nBioViEqWVX3FW5cmUW92rxhgsXjkUJ9CdCYTl8TpAgAcshswRNyjdixAhOnTo1izBZhMKLFy9mEToLDGBROuUBrygFb9++XcuXLl3iuHHj6k8EwU2bNmXsEXTs2DGWC6Dv+JOLx1gzeER4PHDgQMa6sB7Qzp07uWXLlhwjRgxesWIF79ixQ+uxt8iRI3OJEiV47Nixuud8+fJx9OjR+fPnz8qDP4wrl5enTZvGS5Ys4YIFC7J4E3737p3yYH+iLJwuXToeMGCAYl80zJ8/X/c4ePBgXZcokK7z3Llz2k8umspeFEzL5g9jYHxD2EuuXLlYvISOXbhwYd1LsWLF9BwXLVqkspELzWZs09f+xLnhbLBe9BHF03gBsgZBB0TBFMPLBWBROH7+/DkLdOLw4cNzzZo1df/9+/fnNGnSqEwwlp1g3SzCgUHAouVW3ePHj1ksB2MQkFFKKIadoMhQUkPeKiUCkY8fP5ruqgTYnDl8LBxloyRg/PnzpypDkSJFtN/du3c5UqRIjCAHBMGLRVI+CBr7MEoJHijqjRs3lFcsEdeqVUvfzd/w4cNVyU0ZCiXewxT1CaXEusxFQKVgWq3bsGGD8uzfv1/LUHxDr1690rHEommV2Z9YGsPCYpX0PMT6W3W4eNgDDhfkjVLaDcHt27c1GG3SpIk1NgJAKCUUyR1BsbDXXbt2Wc3iiTRohQEBGaWcNGmSxYMXsf66bmNkUIfLifFcldLhvoWBxAKqGcc7KHHixOo6zpw587+K//+XK1fOURZBKUZzVHpRgGuOGjWq1QO4UG4k2eeVm6YBjGGCm4b7EIVT6ACXIZeDxCoQ3PbJkyc10AEf4AjciSHwiAega9euaV+4HbEaJBG29QMuhsu/d++e6eb2iaAN7tVQ0qRJ1YUBs4KwDkAS4FszviglwaXa94d+uXPnNsMQ9vPlyxcCFDL94PJRtvezOgTyApdpSLyOumxABUMJEybUdYplM1WOJ/YBHpy1Iey9bt26ukdThyegjCExHhr44qwkK2Oq9ezcBbwBAp306dNbncyLuBRCbtFOwCB2Ak4Q62Ov8urd07xXr161xoESRYwY0SrjBWv78OEDIeIG3jGbhFIi6IkSJYrFD7wnll/LWOv169e1/6NHj+jt27capSNSd6UrV66oArvWmzIuk5nX1NnlIa6NxIrrXKbdPLFOQ/a1og79QMC/roTDhcJ6Q+IFA7DjctoJF9gTAc+7y6igDnKFDA3Z94I2gTKq8KYdT8gMMYkrBVjB/fv3XXk0OMBND0kKyrxQHjH/jmUgcIGiwqIjAIHV/PTpEwmmUyUQ96/8UFgAe3NxwAfBCa5RwC5un5YvX67jYw77z9UrOBYQhAJklylTJseYZnwEYZ7IyByHavjNE9YHSmYsj125MZ63CutpDfZ6WFdcfldCHS48gk93BA9gvIS9HWeC83OlAEp5/PhxsptvaDgiO6RYQpKgMAIzrClwK6Go9nkhaHvkCWYoHaJGuHbcWNz0EydO6DijRo3SrAAiarRVrFiRsD/kGps1a0aTJ0/WfugLVyrBjB4yDho/uO49e/ZYBwyrAnlAIbwhCTAIFh8wwIyNJ9whrLAnQqQOPtd1wYUfOXJEu8EiS/BFErg5hsE+/zQBWmAPrmvGGWCPnghngnbBkJZRAC8ifWMk7H0DKCUGwCEiPXL06FFq1KiRpg06duxo7/fH3+Gq2rVrp2kC5BeBMSGE8uXLW3PBTbZv355Wr15NSDNIhEwrV66kvn37Kg+UC2NMmDBBNwusI6BclVa+7mgqaOHChbof8LSQtIwhjIU2pKWA3wTUEyykBHhqkcAHNworLJkJTQGZvoE9kbqSaJtq1Kih40pwpZ9hgeeQSvJEULauXbtS586ddc+AAGvXrlXcL0GUdoPSIg7AgUs0rFizZ8+eARTH0xy/q8eZwANJpkPZgCUhA5yNfNlSr4S5kMaCnH5HSFEhBQRZ4B3niJQbMGoAQhRkCFFd69atNeUiLlEjI7FULEpiWKzo2/UzY58+fTR9ZBi9jb6RfkKqSBaoKRA/Pz8Wi2CG0whNrB0LttUoGnxIsYgSWTx4EVzD4i7086LcQkdbYAWsAVkEswasB59M7YRPlSJIRtoH5JruMrxI+YhCmSI/efKEK1WqpOkcjC+Hrekew4AIFPtzJewBqRWki9APckWWw55uEsVmsfTaDp569erx6NGjA6SEEO3aCemzGTNm2Kt0DSYaRiYAqS3IxRDSO1WrVtV0klwIndc+rom+xcuZLtZTvA43b95c+yDqx7qxZzOfYQyQEoJSgsRV8rNnzwxfiD7FLWp6AJNAqUzuzj6p/dCQChJ8aW92vIt74ZIlS7JE3KoYYln1Wz2EYhego5OtgH0LRrPVOF8F12m6xlkbtBLSPMGRK+YUbGnlbd3NJp9VWZLp7pqCXefpYksQyZgvqIRzlYDUwQ4FRwoSuVg7BXDfctOUAPyRkvm3yWCk380LiJEkSRKPLPhaAfgB7IggyN/fX79kAMPgi0xghH27RtP2PnCZrlkAe/vv3tEvOHLFnHCleHoi+VCgAZ6n9uDUu0bnZgxAJcwXVAK+x5c/saSaFQE06NGjh+JzO0TDeI6UENIriJT+bQIIDmyDOBAENEElHJ4kw/UX1D4+vpCTADAnonTxYBqMIlhMLdE8AlfXtFAYmM2QW4pvZJ8EnBJAoIj8MDyd2yBH2H1K6ZSZrxQKJOARU4aCtfmW8JdKwKeUf+nBh+Zt+5QyNJ/OX7q2fwCyLJiVmlJmQAAAAABJRU5ErkJggg==" />
        </div>
      </div>
    )
  }
}

